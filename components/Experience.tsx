import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import Sphere from "./Sphere"
import Floor from "./Floor"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"

const Experience = () => {
  const sphereRef = useRef<any>()

  const { freezeSphere } = useControls({
    freezeSphere: {
      value: false,
      label: "Freeze Sphere",
    },
  })

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime()

    if (!freezeSphere) {
      sphereRef.current.position.y = Math.cos(elapsedTime * 2) / 5
      sphereRef.current.position.y = Math.sin(elapsedTime * 2) / 5
    }
  })

  return (
    <>
      <directionalLight color="white" position={[2, 2, 0]} intensity={0.2} />
      <ambientLight intensity={0.2} />
      <OrbitControls />
      <mesh ref={sphereRef}>
        <Sphere />
      </mesh>
      <Floor />
    </>
  )
}

export default Experience
