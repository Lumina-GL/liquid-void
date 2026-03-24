"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

import vertexShader from "../LiquidVoid/shaders/vertex.glsl";
import fragmentShader from "../LiquidVoid/shaders/fragment.glsl";

export interface LiquidConfig {
  speed: number;
  distortion: number;
  frequency: number;
  colorA: string;
  colorB: string;
  fresnel: number;
}

interface LiquidObjectProps {
  config: LiquidConfig;
}

const LiquidCore: React.FC<LiquidObjectProps> = ({ config }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  const isMobile = viewport.width < 6;
  const segments = isMobile ? 64 : 128; 

  const scale = useMemo<[number, number, number]>(() => 
    isMobile ? [1, 1, 1] : [2, 2, 2], 
  [isMobile]);

  const colorA = useMemo(() => new THREE.Color(config.colorA), []); // eslint-disable-line react-hooks/exhaustive-deps
  const colorB = useMemo(() => new THREE.Color(config.colorB), []); // eslint-disable-line react-hooks/exhaustive-deps

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uDistortion: { value: config.distortion },
    uFrequency: { value: config.frequency },
    uColorA: { value: colorA },
    uColorB: { value: colorB },
    uFresnelPower: { value: config.fresnel },
  }), []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
  const currentMesh = meshRef.current;
  return () => {

    if (currentMesh) {
      currentMesh.geometry.dispose();
      if (Array.isArray(currentMesh.material)) {
        currentMesh.material.forEach((mat) => mat.dispose());
      } else {
        currentMesh.material.dispose();
      }
    }
  };
}, []);  

  useFrame((state) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.ShaderMaterial;
    const { clock } = state;
    
    mat.uniforms.uTime.value = clock.getElapsedTime() * config.speed;
    mat.uniforms.uDistortion.value = THREE.MathUtils.lerp(mat.uniforms.uDistortion.value, config.distortion, 0.05);
    mat.uniforms.uFrequency.value = THREE.MathUtils.lerp(mat.uniforms.uFrequency.value, config.frequency, 0.05);
    
    colorA.set(config.colorA);
    colorB.set(config.colorB);
    mat.uniforms.uColorA.value.lerp(colorA, 0.05);
    mat.uniforms.uColorB.value.lerp(colorB, 0.05);
    
    mat.uniforms.uFresnelPower.value = THREE.MathUtils.lerp(mat.uniforms.uFresnelPower.value, config.fresnel, 0.05);

    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh scale={scale} ref={meshRef} frustumCulled={true}>
        <sphereGeometry args={[1.2, segments, segments]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          dithering={true} 
        />
      </mesh>
    </Float>
  );
};

export default LiquidCore;