"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <Model />
                    {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
                </Suspense>
            </Canvas>
        </div>
    );
}
