import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MatrixRainEffect = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      velocities[i] = Math.random() * 0.1 + 0.05;
    }
    
    return { positions, velocities };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= particles.velocities[i / 3];
        
        if (positions[i + 1] < -10) {
          positions[i + 1] = 10;
          positions[i] = (Math.random() - 0.5) * 20;
          positions[i + 2] = (Math.random() - 0.5) * 20;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ff41"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const MatrixRain = () => {
  return (
    <div className="absolute inset-0 opacity-60 z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <MatrixRainEffect />
      </Canvas>
    </div>
  );
};

export default MatrixRain;