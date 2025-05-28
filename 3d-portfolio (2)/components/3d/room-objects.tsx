"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Box, Sphere, Cylinder } from "@react-three/drei"
import type { Mesh } from "three"

interface RoomObjectProps {
  position: [number, number, number]
  onClick: () => void
  children: React.ReactNode
  hoverColor?: string
}

function InteractiveObject({ position, onClick, children, hoverColor = "#4f46e5" }: RoomObjectProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { gl } = useThree()

  useFrame(() => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y += 0.01
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
      <group ref={meshRef} scale={hovered ? 1.1 : 1}>
        {children}
      </group>
      {hovered && (
        <Sphere args={[0.1]} position={[0, 2, 0]}>
          <meshBasicMaterial color={hoverColor} transparent opacity={0.8} />
        </Sphere>
      )}
    </group>
  )
}

interface RoomObjectsProps {
  onObjectClick: (objectType: string) => void
}

export function RoomObjects({ onObjectClick }: RoomObjectsProps) {
  return (
    <>
      {/* Laptop on desk */}
      <InteractiveObject position={[0, 0.6, 0]} onClick={() => onObjectClick("laptop")}>
        {/* Laptop base */}
        <Box args={[1.2, 0.05, 0.8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2d3748" />
        </Box>
        {/* Laptop screen */}
        <Box args={[1.2, 0.8, 0.05]} position={[0, 0.4, -0.4]} rotation={[-0.2, 0, 0]}>
          <meshStandardMaterial color="#1a202c" />
        </Box>
        {/* Screen content */}
        <Box args={[1.1, 0.7, 0.01]} position={[0, 0.4, -0.37]} rotation={[-0.2, 0, 0]}>
          <meshBasicMaterial color="#4299e1" />
        </Box>
      </InteractiveObject>

      {/* Books stack */}
      <InteractiveObject position={[-1.5, 0.6, 0.5]} onClick={() => onObjectClick("books")}>
        <Box args={[0.3, 0.05, 0.4]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#e53e3e" />
        </Box>
        <Box args={[0.25, 0.05, 0.35]} position={[0, 0.05, 0]}>
          <meshStandardMaterial color="#38a169" />
        </Box>
        <Box args={[0.28, 0.05, 0.38]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#3182ce" />
        </Box>
      </InteractiveObject>

      {/* Picture frame */}
      <InteractiveObject position={[0, 1.5, -1.9]} onClick={() => onObjectClick("picture")}>
        <Box args={[0.6, 0.8, 0.05]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>
        <Box args={[0.5, 0.7, 0.02]} position={[0, 0, 0.03]}>
          <meshBasicMaterial color="#f7fafc" />
        </Box>
      </InteractiveObject>

      {/* Plant */}
      <InteractiveObject position={[1.5, 0.6, -0.5]} onClick={() => onObjectClick("plant")}>
        {/* Pot */}
        <Cylinder args={[0.15, 0.2, 0.3]} position={[0, 0.15, 0]}>
          <meshStandardMaterial color="#8b4513" />
        </Cylinder>
        {/* Plant stem */}
        <Cylinder args={[0.02, 0.02, 0.4]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#22543d" />
        </Cylinder>
        {/* Leaves */}
        <Sphere args={[0.2]} position={[-0.1, 0.7, 0]}>
          <meshStandardMaterial color="#38a169" />
        </Sphere>
        <Sphere args={[0.15]} position={[0.1, 0.8, 0.1]}>
          <meshStandardMaterial color="#48bb78" />
        </Sphere>
      </InteractiveObject>

      {/* Coffee mug */}
      <InteractiveObject position={[0.8, 0.6, 0.3]} onClick={() => onObjectClick("coffee")}>
        <Cylinder args={[0.08, 0.1, 0.15]} position={[0, 0.075, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Cylinder>
        {/* Handle */}
        <Cylinder args={[0.02, 0.02, 0.1]} position={[0.12, 0.075, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#ffffff" />
        </Cylinder>
        {/* Coffee */}
        <Cylinder args={[0.07, 0.09, 0.02]} position={[0, 0.14, 0]}>
          <meshBasicMaterial color="#8b4513" />
        </Cylinder>
      </InteractiveObject>
    </>
  )
}
