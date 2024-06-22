import HomePublicLayout from '@/src/layouts/HomePublic'
import { Box, Container, styled } from '@mui/material'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import React from 'react'

const BannerContainer = styled(Box)(({ theme }) => ({
  // position: 'relative',
  // height: '100vh',
  // backgroundColor: 'rgb(238, 174, 202)',
  // [theme.breakpoints.down('sm')]: {
  //   height: 'calc(100vh - 380px)',
  // },
  '.canvas': {
    position: 'fixed !important',
    inset: '0 !important',
  },
}))

const Index: NextPage = () => {
  return (
    // <BannerContainer>
    //   <HomePublicLayout>
    //     <Container maxWidth={'xl'}>
    <BannerContainer>
      <HomePublicLayout>

      <Canvas className='canvas'>
        <OrbitControls />
        <Environment preset='sunset' />
        <ambientLight />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color={'#f00'} />
        </mesh>
      </Canvas>
      </HomePublicLayout>
    </BannerContainer>

    //     </Container>
    //   </HomePublicLayout>
    // </BannerContainer>
  )
}

export default Index
