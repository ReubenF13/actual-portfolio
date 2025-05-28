"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Plane, Cylinder } from "@react-three/drei"
import type { Group } from "three"

export function EnhancedRoom() {
  const roomRef = useRef<Group>(null)

  // Add subtle room breathing animation
  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.002
    }
  })

  return (
    <group ref={roomRef}>
      {/* Enhanced Floor with wood texture effect */}
      <Plane args={[8, 8]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#d4a574" roughness={0.8} metalness={0.1} />
      </Plane>

      {/* Floor boards effect */}
      {Array.from({ length: 8 }, (_, i) => (
        <Plane key={i} args={[8, 0.05]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, -3.5 + i]}>
          <meshStandardMaterial color="#c49464" roughness={0.9} />
        </Plane>
      ))}

      {/* Enhanced Walls with better materials */}
      {/* Back wall */}
      <Plane args={[8, 4]} position={[0, 2, -2]} receiveShadow>
        <meshStandardMaterial color="#f8f9fa" roughness={0.9} metalness={0.0} />
      </Plane>

      {/* Left wall */}
      <Plane args={[4, 4]} position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial color="#f1f3f4" roughness={0.9} />
      </Plane>

      {/* Right wall */}
      <Plane args={[4, 4]} position={[4, 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial color="#f1f3f4" roughness={0.9} />
      </Plane>

      {/* Enhanced Desk with better proportions */}
      <Box args={[2.8, 0.08, 1.4]} position={[0, 0.52, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#8b4513" roughness={0.3} metalness={0.1} />
      </Box>

      {/* Desk edge detail */}
      <Box args={[2.8, 0.03, 1.4]} position={[0, 0.565, 0]}>
        <meshStandardMaterial color="#654321" roughness={0.4} />
      </Box>

      {/* Enhanced Desk legs with better shape */}
      {[
        [-1.3, 0, -0.6],
        [1.3, 0, -0.6],
        [-1.3, 0, 0.6],
        [1.3, 0, 0.6],
      ].map((position, index) => (
        <Box key={index} args={[0.08, 1.04, 0.08]} position={position} castShadow>
          <meshStandardMaterial color="#654321" roughness={0.6} />
        </Box>
      ))}

      {/* Enhanced Chair */}
      <Box args={[0.65, 0.06, 0.65]} position={[0, 0.42, 1.3]} castShadow receiveShadow>
        <meshStandardMaterial color="#2d3748" roughness={0.4} metalness={0.2} />
      </Box>
      <Box args={[0.65, 0.85, 0.06]} position={[0, 0.85, 0.97]} castShadow>
        <meshStandardMaterial color="#2d3748" roughness={0.4} metalness={0.2} />
      </Box>

      {/* Chair legs */}
      {[
        [-0.25, 0.21, 1.05],
        [0.25, 0.21, 1.05],
        [-0.25, 0.21, 1.55],
        [0.25, 0.21, 1.55],
      ].map((position, index) => (
        <Cylinder key={index} args={[0.02, 0.02, 0.42]} position={position} castShadow>
          <meshStandardMaterial color="#1a202c" roughness={0.3} metalness={0.7} />
        </Cylinder>
      ))}

      {/* Window with frame */}
      <Box args={[1.5, 1.2, 0.05]} position={[3.97, 1.8, 0]} castShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
      </Box>
      <Plane args={[1.3, 1.0]} position={[3.98, 1.8, 0]}>
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.3} />
      </Plane>

      {/* Ceiling light fixture */}
      <Cylinder args={[0.3, 0.3, 0.1]} position={[0, 3.9, 0]} castShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.2} />
      </Cylinder>

      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.3} />

      {/* Main ceiling light */}
      <pointLight
        position={[0, 3.5, 0]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Window light */}
      <directionalLight
        position={[5, 3, 2]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Accent lighting */}
      <pointLight position={[-2, 2, 2]} intensity={0.4} color="#ffd700" />
      <pointLight position={[2, 1, -1]} intensity={0.3} color="#4169e1" />
    </group>
  )
}
