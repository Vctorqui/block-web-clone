import {
  OrbitControls,
  Environment,
  MeshWobbleMaterial,
} from '@react-three/drei'
import React from 'react'

const HomeScene = ({ animationSpeed, animationFactor }: any) => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset='sunset' />
      <ambientLight />
      <mesh>
        <boxGeometry args={[2, 1.5, 1.2]} />
        <MeshWobbleMaterial
          depthTest={true}
          color={'#1cc3e2'}
          depthWrite={true}
          speed={animationSpeed}
          factor={animationFactor}
          envMapIntensity={1}
          roughness={1}
          metalness={1}
        />
      </mesh>
    </>
  )
}

export default HomeScene