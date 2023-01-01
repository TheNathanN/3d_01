import { OrbitControls } from "@react-three/drei"
import { Ref, useRef } from "react"
import Sphere from "./Sphere"
import Floor from "./Floor"
import { useFrame } from "@react-three/fiber"

const Experience = () => {
  const sphereRef = useRef<any>()

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime()

    sphereRef.current.position.y = Math.cos(elapsedTime * 2) / 5
    sphereRef.current.position.y = Math.sin(elapsedTime * 2) / 5
  })

  return (
    <>
      <directionalLight color="white" position={[2, 2, 0]} intensity={0.2} />
      <ambientLight intensity={0.2} />
      <OrbitControls />
      <mesh ref={sphereRef}>
        <Sphere meshRef={sphereRef} />
      </mesh>
      <Floor />
    </>
  )
}

export default Experience
