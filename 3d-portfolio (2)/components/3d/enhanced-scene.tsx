"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera, Preload } from "@react-three/drei"
import { EnhancedRoom } from "./enhanced-room"
import { EnhancedRoomObjects } from "./enhanced-objects"
import { FloatingParticles } from "./floating-particles"
import { Suspense } from "react"

interface EnhancedSceneProps {
  onObjectClick: (objectType: string) => void
}

export function EnhancedScene({ onObjectClick }: EnhancedSceneProps) {
  return (
    <Canvas
      shadows
      className="w-full h-full"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <PerspectiveCamera makeDefault position={[4, 3, 4]} fov={50} />

      <Suspense fallback={null}>
        {/* Enhanced environment lighting */}
        <Environment preset="city" background={false} />

        {/* Fog for depth */}
        <fog attach="fog" args={["#f8f9fa", 8, 15]} />

        {/* Enhanced room and objects */}
        <EnhancedRoom />
        <EnhancedRoomObjects onObjectClick={onObjectClick} />

        {/* Floating particles for atmosphere */}
        <FloatingParticles />

        {/* Preload assets */}
        <Preload all />
      </Suspense>

      {/* Enhanced controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate={false}
        autoRotateSpeed={0.3}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        zoomSpeed={0.8}
      />
    </Canvas>
  )
}
