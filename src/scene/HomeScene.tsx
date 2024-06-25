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
        <boxGeometry args={[2, 1.5, 1.2]} morphTargetsRelative={true} />
        {/* <meshPhysicalMaterial color={'#f00'}/> */}
        {/* <meshToonMaterial color={'#f00'}/> */}
        {/* <MeshDistortMaterial depthTest={true} depthWrite={true}  speed={1.5} factor={1} color="#f00" metalness={0.9} roughness={0.1} /> */}
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
        {/* <meshStandardMaterial depthTest={true} depthWrite={true} color={'#f00'} envMapIntensity={1} roughness={1} metalness={1}/> */}
      </mesh>
    </>
  )
}

export default HomeScene






