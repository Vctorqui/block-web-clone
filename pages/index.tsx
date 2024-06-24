import CustomCheckbox from '@/src/components/CustomCheckBox'
import CustomDialog from '@/src/components/CustomDialog'
import { LinkBlockStyled } from '@/src/components/LinkStyled'
import MusicPlayer from '@/src/components/MusicPlayer'
import { AccessibilityIcon, BlockIcon } from '@/src/components/SvgIcon'
import HomePublicFooter from '@/src/layouts/homePublic/Footer'
import HomeScene from '@/src/scene/HomeScene'
import theme from '@/theme/theme'
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

const BannerContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 'calc(100vh - 40px)',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'calc(100vh - 80px)',
  },

  '.canvas': {
    position: 'fixed !important',
    inset: '0 !important',
    // background: 'rgb(238, 174, 202)',
    pointerEvent: 'none',
    // background: 'rgb(34,193,195)',
    background:
      'radial-gradient(circle, rgba(34,193,195,1) 44%, rgba(253,71,45,1) 86%)',
  },
}))

const HeaderBox = styled(Box)(({ theme }) => ({
  '.headerContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: ' center',
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px',
    },
  },

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
  '.textLink': {
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
}))

const Index: NextPage = () => {
  const [checked, setChecked] = React.useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  // Lógica de la animación
  const animationSpeed = isPaused ? 0 : 1 // Velocidad de la animación (0 para pausar)
  const animationFactor = isPaused ? 1 : 1.5 // Factor de deformación (1 para pausar)
  const [openDialog, setOpenDialog] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  useEffect(() => {
    // Simula una carga de datos o una petición a una API
    setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Cambia el tiempo según tus necesidades
  }, [])

  return (
    <>
      {isLoading ? (
        <>
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100vh'}
          >
            <BlockIcon width={'200px'} height={'200px'} />
          </Box>
        </>
      ) : (
        <Fade>
          <BannerContainer>
            <Canvas
              className='canvas'
              shadows
              camera={{ position: [-50, 50, 100], fov: 2 }}
            >
              <HomeScene
                animationFactor={animationFactor}
                animationSpeed={animationSpeed}
              />
            </Canvas>
            <HeaderBox>
              <Container maxWidth={'xl'}>
                <Box className='headerContainer' component={'div'}>
                  <MusicPlayer />
                  <Box
                    component='div'
                    display={'flex'}
                    alignItems={'center'}
                    gap={4}
                  >
                    <LinkBlockStyled additionalClassName='textLink' href={''}>
                      NEWS
                    </LinkBlockStyled>
                    <LinkBlockStyled additionalClassName='textLink' href={''}>
                      CARRERS
                    </LinkBlockStyled>
                    <LinkBlockStyled additionalClassName='textLink' href={''}>
                      INVENTORS
                    </LinkBlockStyled>
                    <IconButton
                      onClick={() => setOpenDialog(true)}
                      className='iconButton'
                    >
                      <AccessibilityIcon width={'20px'} />
                    </IconButton>
                  </Box>
                </Box>
              </Container>
            </HeaderBox>
            <CustomDialog
              open={openDialog}
              onClose={() => {
                setOpenDialog(false)
              }}
              title={'Accessibility'}
            >
              <Stack
                // padding={2}
                spacing={2}
              >
                <Box margin={theme.spacing(2, 0, 3)} component={'div'}>
                  <Typography
                    variant={'h6'}
                    color={theme.palette.text.secondary}
                    align='left'
                  >
                    Use the controls below to customize your web experience.
                  </Typography>
                </Box>
                <Box
                  component={'div'}
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography
                    variant={'h6'}
                    // ml={2}
                    color={theme.palette.text.secondary}
                  >
                    Reduce color
                  </Typography>
                  <CustomCheckbox
                    name={'checkbox1'}
                    value={checked}
                    onChange={handleChange}
                  />
                </Box>
                <Divider sx={{ background: '#4c4c4c' }} />
                <Box
                  component={'div'}
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography
                    variant={'h6'}
                    // ml={2}
                    color={theme.palette.text.secondary}
                  >
                    Reduce motion
                  </Typography>
                  <CustomCheckbox
                    name={'checkbox2'}
                    value={checked}
                    onChange={() => setIsPaused(!isPaused)}
                  />
                </Box>
              </Stack>
            </CustomDialog>
            {/* <HomePublicHeader /> */}
            <HomePublicFooter />
          </BannerContainer>
        </Fade>
      )}
    </>
  )
}
export default Index
