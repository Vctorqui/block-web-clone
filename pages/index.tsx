import CustomDialog from '@/src/components/CustomDialog'
import { BlockIcon } from '@/src/components/SvgIcon'
import HomePublicFooter from '@/src/layouts/homePublic/Footer'
import HomePublicHeader from '@/src/layouts/homePublic/Header'
import HomeScene from '@/src/scene/HomeScene'
import theme from '@/theme/theme'
import {
  Box,
  Checkbox,
  Divider,
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
    minHeight: 'calc(100vh - 50px)',
  },

  '.canvas': {
    position: 'fixed !important',
    inset: '0 !important',
    pointerEvent: 'none',
    background:
      'linear-gradient(270deg, rgba(195,34,34,1) 39%, rgba(59,168,170,1) 73%, rgba(34,193,195,1) 90%)',
  },
}))

const Index: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  // Lógica de la animación
  const animationSpeed = isPaused ? 0 : 1 // Velocidad de la animación (0 para pausar)
  const animationFactor = isPaused ? 1 : 1.5 // Factor de deformación (1 para pausar)
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPaused(event.target.checked)
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
          <Fade>
            <Box
              component={'div'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              height={'100vh'}
            >
              <BlockIcon width={'200px'} height={'200px'} />
            </Box>
          </Fade>
        </>
      ) : (
        <BannerContainer>
          <Canvas
            className='canvas'
            shadows
            camera={{ position: [-50, 50, 100], fov: 2.5 }}
          >
            <HomeScene
              animationFactor={animationFactor}
              animationSpeed={animationSpeed}
            />
            {/* <TestScene/> */}
          </Canvas>
          <Fade delay={500}>
            <HomePublicHeader openDialog={() => setIsOpenDialog(true)} />
          </Fade>
          <CustomDialog
            open={isOpenDialog}
            onClose={() => {
              setIsOpenDialog(false)
            }}
            title={'Accessibility'}
          >
            <Box
              component={'div'}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
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
                <Typography variant={'h6'} color={theme.palette.text.secondary}>
                  Reduce color
                </Typography>
                <Checkbox name={'checkbox1'} onChange={handleChange} />
              </Box>
              <Divider sx={{ background: '#4c4c4c' }} />
              <Box
                component={'div'}
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography variant={'h6'} color={theme.palette.text.secondary}>
                  Reduce motion
                </Typography>
                <Checkbox
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                  checked={isPaused}
                  onChange={handleChange}
                />
              </Box>
            </Box>
          </CustomDialog>
          <Fade delay={500}>
            <HomePublicFooter />
          </Fade>
        </BannerContainer>
      )}
    </>
  )
}
export default Index
