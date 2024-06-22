import { LinkBlockStyled } from '@/src/components/LinkStyled'
import MusicPlayer from '@/src/components/MusicPlayer'
import { AccessibilityIcon } from '@/src/components/SvgIcon'
import { Box, Button, Container, IconButton, styled } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(4),
  position: 'relative',
  '.iconButton': {
    padding: 0,
    color: '#000',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'color .2s ease-out',
    marginBottom: '8px',
    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },
  '.line': {
    position: 'relative',
    '&:after': {
      content: '""',
      bottom: -10,
      width: '100px',
      height: '4px',
      position: 'absolute',
      borderRadius: '2px',
      left: '50%',
      transform: 'translate(-50%, 0)',
      transition: 'background .2s ease-out',
      background: '#000',
    },
  },
  '.textLink': {
    fontSize: '20px',
  },
}))

const HomePublicHeader = () => {
  return (
    <Container maxWidth={'xl'}>
      <HeaderBox>
        <MusicPlayer />
        <Box component='div' display={'flex'} alignItems={'center'} gap={4}>
          <LinkBlockStyled additionalClassName='textLink' href={''}>
            NEWS
          </LinkBlockStyled>
          <LinkBlockStyled additionalClassName='textLink' href={''}>
            CARRERS
          </LinkBlockStyled>
          <LinkBlockStyled additionalClassName='textLink' href={''}>
            INVENTORS
          </LinkBlockStyled>
          <IconButton className='iconButton'>
            <AccessibilityIcon width={'20px'} />
          </IconButton>
        </Box>
      </HeaderBox>
    </Container>
  )
}

export default HomePublicHeader
