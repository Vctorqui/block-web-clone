import React, { ReactNode } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import HomePublicHeader from './homePublic/Header'
import HomePublicFooter from './homePublic/Footer';

const HomePublicLayout = ({ children, sx }: { children: ReactNode; sx?: any }) => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <HomePublicHeader />
      <Box minHeight={'calc(100vh - 160px)'} mt={isSm ? 7 : 8} sx={sx}>
        {children}
      </Box>
      <HomePublicFooter />
    </>
  )
}

export default HomePublicLayout
