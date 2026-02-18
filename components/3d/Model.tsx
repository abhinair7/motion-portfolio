"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";

export default function Model() {
    const meshRef = useRef<Mesh>(null);

    // Load the texture. 
    // NOTE: Ensure your image is named 'profile.jpg' and placed in 'public/images/'
    const texture = useTexture("/images/profile.jpg");

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
