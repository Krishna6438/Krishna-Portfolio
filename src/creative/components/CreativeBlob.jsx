import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';

const Blob = () => {
  const meshRef = useRef();

  useFrame((state) => {
    // Slow rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Slight movement based on mouse
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      
      meshRef.current.position.x += (mouseX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (mouseY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#d4a853"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
};

const CreativeBlob = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#f8f5f0" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d4a853" />
        <Environment preset="studio" />
        <Blob />
      </Canvas>
    </div>
  );
};

export default CreativeBlob;
