"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

// Floating geometric shapes that add visual interest
export function FloatingShapes() {
  const cube1 = useRef<Mesh>(null)
  const cube2 = useRef<Mesh>(null)
  const sphere1 = useRef<Mesh>(null)
  const sphere2 = useRef<Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Animate the shapes with different speeds and patterns
    if (cube1.current) {
      cube1.current.rotation.x = time * 0.5
      cube1.current.rotation.y = time * 0.3
      cube1.current.position.y = Math.sin(time) * 0.5
    }

    if (cube2.current) {
      cube2.current.rotation.x = time * -0.3
      cube2.current.rotation.z = time * 0.4
      cube2.current.position.y = Math.cos(time * 1.2) * 0.3
    }

    if (sphere1.current) {
      sphere1.current.position.y = Math.sin(time * 0.8) * 0.4
      sphere1.current.position.x = Math.cos(time * 0.5) * 0.2
    }

    if (sphere2.current) {
      sphere2.current.position.y = Math.cos(time * 1.1) * 0.3
      sphere2.current.position.z = Math.sin(time * 0.7) * 0.2
    }
  })

  return (
    <>
      {/* Floating cubes */}
      <mesh ref={cube1} position={[-4, 2, -2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.7} />
      </mesh>

      <mesh ref={cube2} position={[4, -1, -3]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>

      {/* Floating spheres */}
      <mesh ref={sphere1} position={[-3, -2, -1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#06d6a0" transparent opacity={0.8} />
      </mesh>

      <mesh ref={sphere2} position={[3, 3, -2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f72585" transparent opacity={0.7} />
      </mesh>

      {/* Ambient lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
    </>
  )
}
