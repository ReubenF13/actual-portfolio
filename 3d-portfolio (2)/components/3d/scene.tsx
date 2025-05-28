"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { Room } from "./room"
import { RoomObjects } from "./room-objects"

interface SceneProps {
  onObjectClick: (objectType: string) => void
}

export function Scene({ onObjectClick }: SceneProps) {
  return (
    <Canvas shadows className="w-full h-full">
      <PerspectiveCamera makeDefault position={[3, 2, 3]} fov={60} />

      {/* Environment lighting */}
      <Environment preset="apartment" />

      {/* Room and objects */}
      <Room />
      <RoomObjects onObjectClick={onObjectClick} />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  )
}
