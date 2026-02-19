// Model.tsx

import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Model = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    // Load the texture.
    // Uses the environment variable to handle local vs production paths
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const texture = useTexture(`${basePath}/images/profile.jpg`);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Floating animation
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

        // Gentle rotation based on mouse position (if we had mouse input) or just time
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
        meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    });

    return (
        <mesh ref={meshRef}>
            {/* A thin box to give the photo some "depth" like a card */}
            <boxGeometry args={[3, 4, 0.1]} />
            <meshStandardMaterial
                map={texture}
                roughness={0.4}
                metalness={0.1}
            />
        </mesh>
    );
}

export default Model;
