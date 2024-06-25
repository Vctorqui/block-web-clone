// import CustomDialog from '@/src/components/CustomDialog'
// import { LinkBlockStyled } from '@/src/components/LinkStyled'
// import MusicPlayer from '@/src/components/MusicPlayer'
// import { AccessibilityIcon } from '@/src/components/SvgIcon'
// import theme from '@/theme/theme'
// import {
//   Box,
//   Container,
//   Divider,
//   IconButton,
//   Typography,
//   styled,
//   useMediaQuery,
// } from '@mui/material'
// import React, { useState } from 'react'

// const HeaderBox = styled(Box)(({ theme }) => ({
//   '.headerContainer': {
//     display: 'flex',
//     flexDirection:'row',
//     justifyContent: 'space-between',
//     alignItems: ' center',
//     paddingTop: theme.spacing(4),
//     [theme.breakpoints.down('sm')] : {
// flexDirection: 'column'
//     }
//   },

//   '.iconButton': {
//     padding: 0,
//     color: '#000',
//     background: 'transparent',
//     cursor: 'pointer',
//     transition: 'color .2s ease-out',
//     marginBottom: '8px',
//     '&:hover': {
//       color: theme.palette.text.secondary,
//     },
//   },
//   '.textLink': {
//     fontSize: '20px',
//   },
// }))

// const HomePublicHeader = () => {
//   const [openDialog, setOpenDialog] = useState(false)
//   const [checked, setChecked] = React.useState(true)

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked(event.target.checked)
//   }

//   return (
//     <>
//       <HeaderBox>
//         <Container maxWidth={'xl'}>
//           <Box className='headerContainer' component='div'>
//             <MusicPlayer />
//             <Box component='div' display={'flex'} alignItems={'center'} gap={4}>
//               <LinkBlockStyled additionalClassName='textLink' href={''}>
//                 NEWS
//               </LinkBlockStyled>
//               <LinkBlockStyled additionalClassName='textLink' href={''}>
//                 CARRERS
//               </LinkBlockStyled>
//               <LinkBlockStyled additionalClassName='textLink' href={''}>
//                 INVENTORS
//               </LinkBlockStyled>
//               <IconButton
//                 onClick={() => setOpenDialog(true)}
//                 className='iconButton'
//               >
//                 <AccessibilityIcon width={'20px'} />
//               </IconButton>
//             </Box>
//           </Box>
//         </Container>
//       </HeaderBox>
//       <CustomDialog
//         open={openDialog}
//         onClose={() => {
//           setOpenDialog(false)
//         }}
//         title={'Accessibility'}
//       >
//         <Box
//           component={'div'}
//           padding={2}
//           display={'flex'}
//           flexDirection={'column'}
//           gap={1}
//         >
//           <Typography
//             variant={'h6'}
//             ml={2}
//             color={theme.palette.text.secondary}
//             align='left'
//           >
//             Use the controls below to customize your web experience.
//           </Typography>

//           <Box
//             component={'div'}
//             sx={{ display: 'flex', justifyContent: 'space-between' }}
//           >
//             <Typography
//               variant={'h6'}
//               ml={2}
//               color={theme.palette.text.secondary}
//             >
//               Reduce color
//             </Typography>
//             <CustomCheckbox name={''} value={checked} onChange={handleChange} />
//           </Box>
//           <Divider sx={{ background: '#fff' }} />
//           <Box
//             component={'div'}
//             sx={{ display: 'flex', justifyContent: 'space-between' }}
//           >
//             <Typography
//               variant={'h6'}
//               ml={2}
//               color={theme.palette.text.secondary}
//             >
//               Reduce motion
//             </Typography>
//             <CustomCheckbox name={''} value={checked} onChange={handleChange} />
//           </Box>
//         </Box>
//       </CustomDialog>
//     </>
//   )
// }

// export default HomePublicHeader
