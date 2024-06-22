import { LinkBlockStyled } from '@/src/components/LinkStyled'
import { BlockIcon } from '@/src/components/SvgIcon'
import { Box, Container, Typography, styled } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'

const FooterBox = styled(Box)(({ theme }) => ({
  '.textLink' : {
    fontWeight: 400,
    fontSize: '20px'
  }
}))

const HomePublicFooter = () => {
  return (
    <FooterBox>
    <Container maxWidth={'xl'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} gap={4}>
          <BlockIcon width={'200px'} />
          <Box display={'flex'} alignItems={'center'} gap={2}>
            <LinkBlockStyled additionalClassName='textLink' href={'https://squareup.com/us/es'}>Square</LinkBlockStyled>
            <LinkBlockStyled additionalClassName='textLink' href={'https://cash.app/'}>Cash App</LinkBlockStyled>
            <LinkBlockStyled additionalClassName='textLink' href={'https://spiral.xyz/'}>Spiral</LinkBlockStyled>
            <LinkBlockStyled additionalClassName='textLink' href={'https://tidal.com/'}>Tidal</LinkBlockStyled>
            <LinkBlockStyled additionalClassName='textLink' href={'https://www.tbd.website/'}>TBD</LinkBlockStyled>
          </Box>
        </Box>
        <Box flexWrap={'wrap'}>
          <Typography variant='caption'>
            © 2024 Block, Inc. BLOCK and the Block Logo are trademarks of Block,
            Inc. <LinkBlockStyled href={''}>Legal</LinkBlockStyled>
          </Typography>
        </Box>
      </Box>
    </Container>
    </FooterBox>
  )
}

export default HomePublicFooter
