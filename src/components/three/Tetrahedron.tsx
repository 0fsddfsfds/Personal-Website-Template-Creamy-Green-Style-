"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

const DRAG_ROTATION_SPEED = 0.008;

export default function Tetrahedron({ scale = 1 }: { scale?: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const gl = useThree((state) => state.gl);
  const reducedMotion = useRef(false);
  const dragging = useRef(false);
  const hovered = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const detachRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    return () => detachRef.current?.();
  }, []);

  const setCursor = (cursor: string) => {
    gl.domElement.style.cursor = cursor;
  };

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();

    dragging.current = true;
    lastPointer.current = {
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY,
    };
    setCursor("grabbing");

    // 捕获指针：拖出四面体区域（甚至窗口）后仍持续响应，直到抬起鼠标。
    try {
      (event.nativeEvent.target as Element).setPointerCapture?.(
        event.nativeEvent.pointerId,
      );
    } catch {
      // 某些环境不支持指针捕获时静默忽略，window 监听仍可工作。
    }

    const handleMove = (native: PointerEvent) => {
      if (!dragging.current || !mesh.current) return;
      const dx = native.clientX - lastPointer.current.x;
      const dy = native.clientY - lastPointer.current.y;
      lastPointer.current = { x: native.clientX, y: native.clientY };
      mesh.current.rotation.y += dx * DRAG_ROTATION_SPEED;
      mesh.current.rotation.x = THREE.MathUtils.clamp(
        mesh.current.rotation.x + dy * DRAG_ROTATION_SPEED,
        -1.2,
        1.2,
      );
    };

    const handleUp = () => {
      dragging.current = false;
      detach();
      setCursor(hovered.current ? "grab" : "auto");
    };

    const detach = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
      detachRef.current = null;
    };

    detachRef.current = detach;
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
  };

  const handlePointerOver = () => {
    hovered.current = true;
    if (!dragging.current) setCursor("grab");
  };

  const handlePointerOut = () => {
    hovered.current = false;
    if (!dragging.current) setCursor("auto");
  };

  useFrame((_, delta) => {
    if (!mesh.current || dragging.current || reducedMotion.current) return;
    mesh.current.rotation.y += delta * 0.35;
    mesh.current.rotation.x += delta * 0.12;
  });

  return (
    <mesh
      ref={mesh}
      scale={scale}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <tetrahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#5fbfab"
        roughness={0.55}
        metalness={0.05}
        emissive="#0f766e"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}
