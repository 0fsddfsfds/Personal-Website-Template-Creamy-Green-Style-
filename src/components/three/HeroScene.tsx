"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import Tetrahedron from "./Tetrahedron";
import CameraRig from "./CameraRig";

function ClayFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        aria-hidden
        className="h-40 w-40 rotate-[20deg] bg-gradient-to-br from-clay-mint-light via-clay-mint to-clay-mint-dark shadow-mint"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 72%, 78% 100%, 22% 100%, 0% 72%)",
        }}
      />
    </div>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      setWebgl(Boolean(gl));
    } catch {
      setWebgl(false);
    }
  }, []);

  if (!mounted || !webgl) return <ClayFallback />;

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} />
      <pointLight position={[-5, -3, -4]} intensity={0.8} color="#b7e8dc" />

      <group position={[1.9, 0.1, 0]}>
        <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.9}>
          <Tetrahedron scale={0.92} />
        </Float>
        <ContactShadows
          position={[0, -2.3, 0]}
          opacity={0.35}
          scale={9}
          blur={2.6}
          far={3.2}
          color="#3fa389"
        />
      </group>

      <CameraRig />
    </Canvas>
  );
}
