import { BlockIcon } from '@/src/components/SvgIcon'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const HomePublicFooter = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box display={'flex'} justifyContent={'space-between'}>
      <Box display={'flex'} alignItems={'center'} gap={4}>
        <BlockIcon width={'200px'}/>
        <Box display={'flex'} alignItems={'center'} gap={2} > 
          <Link href={'https://squareup.com/us/es'}>Square</Link>
          <Link href={'https://cash.app/'}>Cash App</Link>
          <Link href={'https://spiral.xyz/'}>Spiral</Link>
          <Link href={'https://tidal.com/'}>Tidal</Link>
          <Link href={'https://www.tbd.website/'}>TBD</Link>
        </Box>
      </Box>
      <Typography variant='body2'>© 2024  Block, Inc. BLOCK and the Block Logo are trademarks of Block, Inc.</Typography>
      </Box>
    </Container>
  )
}

export default HomePublicFooter
