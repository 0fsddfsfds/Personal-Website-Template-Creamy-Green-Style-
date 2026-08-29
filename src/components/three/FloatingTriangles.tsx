"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";
import { threeTriangles } from "@/lib/floating-shapes";
import type { ThreeTriangleConfig } from "@/lib/floating-shapes";

/** 生成带圆角的三角形 Shape（世界单位，size 为整体高度）。 */
function roundedTriangle(size: number): THREE.Shape {
  const h = size * 0.5;
  const w = h * 0.92;
  const corners = [
    new THREE.Vector2(0, h),
    new THREE.Vector2(w, -h * 0.5),
    new THREE.Vector2(-w, -h * 0.5),
  ];
  const radius = size * 0.15;
  const n = corners.length;
  const a: THREE.Vector2[] = [];
  const b: THREE.Vector2[] = [];
  for (let i = 0; i < n; i++) {
    const p = corners[i];
    const prev = corners[(i - 1 + n) % n];
    const next = corners[(i + 1) % n];
    const u1 = prev.clone().sub(p).normalize();
    const u2 = next.clone().sub(p).normalize();
    a.push(p.clone().add(u1.multiplyScalar(radius)));
    b.push(p.clone().add(u2.multiplyScalar(radius)));
  }
  const shape = new THREE.Shape();
  shape.moveTo(a[0].x, a[0].y);
  for (let i = 0; i < n; i++) {
    shape.quadraticCurveTo(corners[i].x, corners[i].y, b[i].x, b[i].y);
    shape.lineTo(a[(i + 1) % n].x, a[(i + 1) % n].y);
  }
  shape.closePath();
  return shape;
}

function DriftingTriangle({ config }: { config: ThreeTriangleConfig }) {
  const mesh = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    const m = mesh.current;
    if (!m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const other = threeTriangles.find((item) => item.id !== config.id);
    if (!other) return;

    // 固定路径：从英雄区顶部开始互换，滚动到联系区顶部时恰好完成。
    const tween = gsap.to(m.position, {
      keyframes: [
        { x: config.x, y: config.y },
        { x: other.x, y: other.y },
      ],
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        endTrigger: "#contact",
        end: "top top",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [config]);

  return (
    <mesh
      ref={mesh}
      position={[config.x, config.y, config.z]}
      rotation={[0, 0, config.rotation]}
    >
      <shapeGeometry args={[roundedTriangle(config.size)]} />
      <meshBasicMaterial
        color={config.color}
        transparent
        opacity={config.opacity}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function FloatingTriangles() {
  const [mounted, setMounted] = useState(false);
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setWebgl(Boolean(gl));
    } catch {
      setWebgl(false);
    }
  }, []);

  if (!mounted || !webgl) return null;

  return (
    <div
      className="absolute inset-0"
      style={{ filter: "drop-shadow(0 22px 32px rgba(36,50,58,0.12))" }}
    >
      <Canvas
        className="pointer-events-none"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        {threeTriangles.map((config) => (
          <DriftingTriangle key={config.id} config={config} />
        ))}
      </Canvas>
    </div>
  );
}
