import { AccessibilityIcon, BlockIcon } from '@/src/components/SvgIcon'
import { Box, Button, Container, IconButton } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const HomePublicHeader = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingTop={2}
      >
        <Button variant='contained'>Block Vibes</Button>
        <Box display={'flex'} gap={2}>
          <Link href={''}>NEWS</Link>
          <Link href={''}>CARRERS</Link>
          <Link href={''}>INVENTORS</Link>
          <IconButton sx={{padding: 0, color: '#000'}}>
          <AccessibilityIcon width={'20px'}/>
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default HomePublicHeader
