import { MeshProps } from "../helpers/types"

const Sphere = ({ meshRef }: MeshProps) => {
  return (
    <mesh ref={meshRef} position={[0, 0.8, 0]} castShadow>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

export default Sphere
