"use client"

import { Box, Plane } from "@react-three/drei"

export function Room() {
  return (
    <group>
      {/* Floor */}
      <Plane args={[8, 8]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f7fafc" />
      </Plane>

      {/* Walls */}
      {/* Back wall */}
      <Plane args={[8, 4]} position={[0, 2, -2]}>
        <meshStandardMaterial color="#edf2f7" />
      </Plane>

      {/* Left wall */}
      <Plane args={[4, 4]} position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#e2e8f0" />
      </Plane>

      {/* Right wall */}
      <Plane args={[4, 4]} position={[4, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial color="#e2e8f0" />
      </Plane>

      {/* Desk */}
      <Box args={[2.5, 0.1, 1.2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#8b4513" />
      </Box>

      {/* Desk legs */}
      <Box args={[0.1, 1, 0.1]} position={[-1.2, 0, -0.5]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.2, 0, -0.5]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[-1.2, 0, 0.5]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.2, 0, 0.5]}>
        <meshStandardMaterial color="#654321" />
      </Box>

      {/* Chair */}
      <Box args={[0.6, 0.05, 0.6]} position={[0, 0.4, 1.2]}>
        <meshStandardMaterial color="#2d3748" />
      </Box>
      <Box args={[0.6, 0.8, 0.05]} position={[0, 0.8, 0.9]}>
        <meshStandardMaterial color="#2d3748" />
      </Box>

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 3, 2]} intensity={1} />
      <pointLight position={[-2, 3, 2]} intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.8} castShadow />
    </group>
  )
}
