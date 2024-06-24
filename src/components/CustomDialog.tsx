import React, { ReactNode } from 'react'
import { Dialog, DialogTitle, DialogContent, styled, Box, IconButton, DialogProps, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import { CloseIcon } from './SvgIcon'

interface customDialogTypes extends DialogProps {
  open: boolean
  title?: string
  fullMobile?: boolean
  children: ReactNode
  onClose?: () => void
}

const BoxClose = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 2,
  right: 2,
}))

const BoxDialog = styled(Dialog)(({ theme }) => ({
  '.css-43llcs-MuiPaper-root-MuiDialog-paper' : {
    backgroundColor: '#000',
    borderRadius: 20,
    color: theme.palette.text.secondary,
    padding: 4,

  },
  '&.full-mobile': {
    '.MuiDialog-paper': {
      borderRadius: '0 20px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: '0',
        maxHeight: '100%'
      }
    },
    '.MuiDialogContent-root': {
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1, 2)
      }
    }
  }
}))

const CustomDialog = ({ open, title, maxWidth = 'sm', fullMobile = false, children, onClose }: customDialogTypes) => {
  return (
    <BoxDialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth className={fullMobile ? 'full-mobile' : ''}>
      <DialogTitle align="center" sx={{ position: 'relative' }}>
        <Typography variant='h5' textAlign={'left'}>{title}</Typography>
        {onClose && (
          <BoxClose>
            <IconButton sx={{color: '#fff'}} onClick={onClose}>
              <CloseIcon  width={'30px'} height={'30px'} />
            </IconButton>
          </BoxClose>
        )}
      </DialogTitle>
      <DialogContent sx={{padding: 0}}>{children}</DialogContent>
    </BoxDialog>
  )
}

export default CustomDialog
