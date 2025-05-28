"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Box, Sphere, Cylinder, Torus } from "@react-three/drei"
import type { Mesh, Group } from "three"

interface EnhancedObjectProps {
  position: [number, number, number]
  onClick: () => void
  children: React.ReactNode
  hoverColor?: string
  rotationAxis?: "x" | "y" | "z"
}

function EnhancedInteractiveObject({
  position,
  onClick,
  children,
  hoverColor = "#4f46e5",
  rotationAxis = "y",
}: EnhancedObjectProps) {
  const meshRef = useRef<Group>(null)
  const glowRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { gl } = useThree()

  useFrame((state) => {
    if (meshRef.current && hovered) {
      const rotation = Math.sin(state.clock.elapsedTime * 2) * 0.1
      if (rotationAxis === "y") meshRef.current.rotation.y += 0.02
      if (rotationAxis === "x") meshRef.current.rotation.x = rotation
      if (rotationAxis === "z") meshRef.current.rotation.z = rotation
    }

    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1)
    }
  })

  return (
    <group
      position={position}
      onClick={onClick}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
        gl.domElement.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        setHovered(false)
        gl.domElement.style.cursor = "auto"
      }}
    >
      <group ref={meshRef} scale={hovered ? 1.05 : 1}>
        {children}
      </group>

      {/* Enhanced hover effect */}
      {hovered && (
        <>
          <Sphere ref={glowRef} args={[0.08]} position={[0, 1.5, 0]}>
            <meshBasicMaterial color={hoverColor} transparent opacity={0.8} />
          </Sphere>
          <Torus args={[0.15, 0.02]} position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial color={hoverColor} transparent opacity={0.6} />
          </Torus>
        </>
      )}
    </group>
  )
}

interface EnhancedObjectsProps {
  onObjectClick: (objectType: string) => void
}

export function EnhancedRoomObjects({ onObjectClick }: EnhancedObjectsProps) {
  return (
    <>
      {/* Enhanced Laptop */}
      <EnhancedInteractiveObject position={[0, 0.6, 0]} onClick={() => onObjectClick("laptop")} hoverColor="#3b82f6">
        {/* Laptop base with better proportions */}
        <Box args={[1.3, 0.04, 0.9]} position={[0, 0, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#2d3748" roughness={0.3} metalness={0.7} />
        </Box>

        {/* Laptop screen */}
        <Box args={[1.3, 0.85, 0.04]} position={[0, 0.42, -0.43]} rotation={[-0.15, 0, 0]} castShadow>
          <meshStandardMaterial color="#1a202c" roughness={0.2} metalness={0.8} />
        </Box>

        {/* Screen bezel */}
        <Box args={[1.2, 0.75, 0.01]} position={[0, 0.42, -0.41]} rotation={[-0.15, 0, 0]}>
          <meshStandardMaterial color="#000000" />
        </Box>

        {/* Screen content with glow */}
        <Box args={[1.1, 0.7, 0.005]} position={[0, 0.42, -0.405]} rotation={[-0.15, 0, 0]}>
          <meshBasicMaterial color="#4299e1" />
        </Box>

        {/* Keyboard keys */}
        {Array.from({ length: 15 }, (_, i) => (
          <Box
            key={i}
            args={[0.06, 0.01, 0.06]}
            position={[-0.5 + (i % 10) * 0.1, 0.025, -0.2 + Math.floor(i / 10) * 0.1]}
          >
            <meshStandardMaterial color="#4a5568" />
          </Box>
        ))}

        {/* Trackpad */}
        <Box args={[0.3, 0.005, 0.2]} position={[0, 0.025, 0.15]}>
          <meshStandardMaterial color="#2d3748" roughness={0.1} metalness={0.9} />
        </Box>
      </EnhancedInteractiveObject>

      {/* Enhanced Books Stack */}
      <EnhancedInteractiveObject
        position={[-1.5, 0.6, 0.5]}
        onClick={() => onObjectClick("books")}
        hoverColor="#10b981"
        rotationAxis="z"
      >
        {/* Book 1 */}
        <Box args={[0.32, 0.05, 0.42]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#dc2626" roughness={0.8} />
        </Box>
        <Box args={[0.3, 0.01, 0.4]} position={[0, 0.03, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>

        {/* Book 2 */}
        <Box args={[0.28, 0.05, 0.38]} position={[0, 0.05, 0]} castShadow>
          <meshStandardMaterial color="#059669" roughness={0.8} />
        </Box>
        <Box args={[0.26, 0.01, 0.36]} position={[0, 0.08, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>

        {/* Book 3 */}
        <Box args={[0.3, 0.05, 0.4]} position={[0, 0.1, 0]} castShadow>
          <meshStandardMaterial color="#2563eb" roughness={0.8} />
        </Box>
        <Box args={[0.28, 0.01, 0.38]} position={[0, 0.13, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>

        {/* Bookmark */}
        <Box args={[0.02, 0.2, 0.01]} position={[0.1, 0.2, 0.15]}>
          <meshStandardMaterial color="#fbbf24" />
        </Box>
      </EnhancedInteractiveObject>

      {/* Enhanced Picture Frame */}
      <EnhancedInteractiveObject
        position={[0, 1.5, -1.95]}
        onClick={() => onObjectClick("picture")}
        hoverColor="#8b5cf6"
        rotationAxis="x"
      >
        {/* Frame */}
        <Box args={[0.65, 0.85, 0.06]} castShadow>
          <meshStandardMaterial color="#8b4513" roughness={0.4} metalness={0.2} />
        </Box>

        {/* Inner frame */}
        <Box args={[0.55, 0.75, 0.02]} position={[0, 0, 0.02]}>
          <meshStandardMaterial color="#d4af37" roughness={0.2} metalness={0.8} />
        </Box>

        {/* Photo */}
        <Box args={[0.5, 0.7, 0.01]} position={[0, 0, 0.035]}>
          <meshBasicMaterial color="#f7fafc" />
        </Box>

        {/* Photo content simulation */}
        <Sphere args={[0.08]} position={[0, 0.15, 0.04]}>
          <meshStandardMaterial color="#4299e1" />
        </Sphere>
        <Box args={[0.3, 0.02, 0.01]} position={[0, -0.1, 0.04]}>
          <meshStandardMaterial color="#2d3748" />
        </Box>
      </EnhancedInteractiveObject>

      {/* Enhanced Plant */}
      <EnhancedInteractiveObject
        position={[1.5, 0.6, -0.5]}
        onClick={() => onObjectClick("plant")}
        hoverColor="#10b981"
        rotationAxis="y"
      >
        {/* Pot with texture */}
        <Cylinder args={[0.18, 0.22, 0.32]} position={[0, 0.16, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#8b4513" roughness={0.9} />
        </Cylinder>

        {/* Pot rim */}
        <Cylinder args={[0.22, 0.22, 0.02]} position={[0, 0.31, 0]}>
          <meshStandardMaterial color="#654321" roughness={0.8} />
        </Cylinder>

        {/* Soil */}
        <Cylinder args={[0.17, 0.17, 0.02]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#3e2723" roughness={1.0} />
        </Cylinder>

        {/* Plant stems */}
        <Cylinder args={[0.015, 0.02, 0.4]} position={[0, 0.52, 0]} castShadow>
          <meshStandardMaterial color="#2d5016" roughness={0.8} />
        </Cylinder>
        <Cylinder args={[0.01, 0.015, 0.35]} position={[-0.05, 0.5, 0.05]} rotation={[0, 0, 0.2]} castShadow>
          <meshStandardMaterial color="#2d5016" roughness={0.8} />
        </Cylinder>

        {/* Leaves with better shape */}
        <Sphere args={[0.12, 8, 6]} position={[-0.08, 0.75, 0]} scale={[1, 0.6, 2]} castShadow>
          <meshStandardMaterial color="#22c55e" roughness={0.6} />
        </Sphere>
        <Sphere args={[0.1, 8, 6]} position={[0.1, 0.8, 0.1]} scale={[1, 0.6, 1.8]} castShadow>
          <meshStandardMaterial color="#16a34a" roughness={0.6} />
        </Sphere>
        <Sphere args={[0.08, 8, 6]} position={[0, 0.85, -0.1]} scale={[1, 0.6, 1.5]} castShadow>
          <meshStandardMaterial color="#15803d" roughness={0.6} />
        </Sphere>
      </EnhancedInteractiveObject>

      {/* Enhanced Coffee Mug */}
      <EnhancedInteractiveObject
        position={[0.8, 0.6, 0.3]}
        onClick={() => onObjectClick("coffee")}
        hoverColor="#f59e0b"
        rotationAxis="y"
      >
        {/* Mug body */}
        <Cylinder args={[0.09, 0.11, 0.16]} position={[0, 0.08, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
        </Cylinder>

        {/* Mug handle */}
        <Torus args={[0.06, 0.015]} position={[0.13, 0.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
        </Torus>

        {/* Coffee */}
        <Cylinder args={[0.08, 0.1, 0.02]} position={[0, 0.15, 0]}>
          <meshStandardMaterial color="#6f4e37" roughness={0.3} />
        </Cylinder>

        {/* Steam effect */}
        <Sphere args={[0.02]} position={[0, 0.25, 0]} scale={[1, 2, 1]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
        </Sphere>
        <Sphere args={[0.015]} position={[0.02, 0.3, 0]} scale={[1, 1.5, 1]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </Sphere>

        {/* Coaster */}
        <Cylinder args={[0.12, 0.12, 0.01]} position={[0, 0.005, 0]} receiveShadow>
          <meshStandardMaterial color="#8b4513" roughness={0.8} />
        </Cylinder>
      </EnhancedInteractiveObject>

      {/* Additional desk items for realism */}

      {/* Pen holder */}
      <Cylinder args={[0.04, 0.04, 0.12]} position={[-0.8, 0.62, -0.3]} castShadow>
        <meshStandardMaterial color="#2d3748" roughness={0.4} metalness={0.6} />
      </Cylinder>

      {/* Pens */}
      <Cylinder args={[0.003, 0.003, 0.15]} position={[-0.78, 0.7, -0.3]} castShadow>
        <meshStandardMaterial color="#1e40af" />
      </Cylinder>
      <Cylinder args={[0.003, 0.003, 0.14]} position={[-0.82, 0.69, -0.3]} castShadow>
        <meshStandardMaterial color="#dc2626" />
      </Cylinder>

      {/* Mouse */}
      <Box args={[0.08, 0.02, 0.12]} position={[0.5, 0.57, 0.2]} castShadow>
        <meshStandardMaterial color="#374151" roughness={0.3} metalness={0.4} />
      </Box>

      {/* Mousepad */}
      <Box args={[0.25, 0.002, 0.2]} position={[0.5, 0.555, 0.2]} receiveShadow>
        <meshStandardMaterial color="#1f2937" roughness={0.8} />
      </Box>
    </>
  )
}
