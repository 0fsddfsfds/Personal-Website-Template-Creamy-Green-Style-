"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";

export default function CameraRig() {
  const camera = useThree((state) => state.camera) as THREE.PerspectiveCamera;
  const position = useRef({ x: 0, y: 0, z: 7 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(position.current, {
      y: -0.55,
      x: 0.45,
      z: 6.1,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [camera]);

  useFrame(() => {
    camera.position.set(position.current.x, position.current.y, position.current.z);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
