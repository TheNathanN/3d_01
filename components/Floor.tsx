import { MeshProps } from "../helpers/types"

const Floor = ({ meshRef }: MeshProps) => {
  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry args={[12, 12, 1]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  )
}

export default Floor
