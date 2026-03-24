"use client";
import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { useControls, folder } from "leva";
import Liquid from "../LiquidVoid/Liquid";

export default function Scene() {

  const config = useControls({
    Mesh: folder({
      speed: { value: 0.5, min: 0, max: 2 },
      distortion: { value: 0.4, min: 0, max: 1.5 },
      frequency: { value: 2.0, min: 0.1, max: 5.0 },
      fresnel: { value: 2.5, min: 0.5, max: 5.0 },
    }),
    Colors: folder({
      colorA: "#101010",
      colorB: "#ff0055",
    }),
    PostProcess: folder({
      bloomIntensity: { value: 0.5, min: 0, max: 3 },
      noiseOpacity: { value: 0.2, min: 0, max: 0.5 },
    })
  });


  return (
    <main className="w-full h-screen bg-black overflow-hidden relative">

      <Canvas
        shadows
        camera={{ fov: 38, near: 0.1, far: 50, position: [0, 0, 10] }}
        dpr={[1, 2]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true,
        }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
        }}
      >
        <color attach="background" args={["#000"]} />

        <Suspense fallback={null}>
          <Liquid config={config} />

          <Environment preset="night" />

          <EffectComposer multisampling={0}>
            <Bloom
              luminanceThreshold={0.2}
              mipmapBlur
              intensity={config.bloomIntensity}
              radius={0.4}
            />
            <Noise opacity={config.noiseOpacity} premultiply />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>

          <ContactShadows
            key="fixed-shadows"
            position={[0, -3, 0]}
            opacity={0.5}
            scale={10}
            blur={2.5}
            far={4}
            color={config.colorB}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />

        <ambientLight intensity={0.2} />
      </Canvas>
    </main>
  );
}