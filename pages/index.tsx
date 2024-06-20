import HomePublicLayout from '@/src/layouts/HomePublic'
import { Box, Container, styled } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  backgroundColor: 'rgb(238, 174, 202)',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 380px)',
  },
}))

const Index: NextPage = () => {
  return (
    <BannerContainer>
      <HomePublicLayout>
        <Container maxWidth={'xl'}></Container>
      </HomePublicLayout>
    </BannerContainer>
  )
}

export default Index
