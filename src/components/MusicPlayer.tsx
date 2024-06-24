import React, { useRef, useState } from 'react'
import data from '../mocks/data'
import { Box, Button, Stack, Typography, styled } from '@mui/material'
import { MuteIcon, PlayIcon, SoundIcon, TidalIcon } from './SvgIcon'
import Link from 'next/link'

const MusicPlayerBox = styled(Box)(({ theme }) => ({
  '.linkButton': {
    display: 'flex',
    justifiyContent: 'center',
    alignItems: 'center',
    border: 'solid 1px #000',
    position: 'relative',
    padding: 20,
    color: theme.palette.text.primary,
    background: 'transparent',
    transition: 'background .2s ease-out,color .2s ease-out',
    borderRadius: '0 40px 40px 0',
    '&:hover': {
      background: '#fff',
    },
  },
}))

const MusicPlayer = () => {
  // create an audio
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null) // Especifica el tipo

  const [iconState, setIconState] = useState('play') // Estado inicial: 'play'

  const handlePlay = (songUrl: string) => {
    if (currentSong === songUrl) {
      // Si la canción actual es la misma, alterna entre reproducir y pausar
      if (isPlaying) {
        audioRef.current?.pause()
        setIsPlaying(false) // Cambia el estado a "no está reproduciendo"
      } else {
        audioRef.current?.play()
        setIsPlaying(true) // Cambia el estado a "está reproduciendo"
      }
    } else {
      setCurrentSong(songUrl)
      setIsPlaying(true) // Comienza a reproducir la nueva canción
    }

    setIconState((prevIcon) => {
      if (prevIcon === 'play') {
        return 'sound'
      } else if (prevIcon === 'sound') {
        return 'mute'
      } else {
        return 'sound'
      }
    })
  }

  // Utilizamos el operador opcional de encadenamiento (?.) para acceder a las propiedades y
  // métodos de audioRef.current solo si audioRef.current no es nulo. Esto debería evitar el error

  // El error “Property ‘pause’ does not exist on type ‘never’ esto se debe a que TypeScript no puede inferir
  //correctamente el tipo de audioRef.current. Para resolverlo, puedes especificar explícitamente el tipo de
  //audioRef como HTMLAudioElement | null

  return (
    <MusicPlayerBox component={'div'}>
      {data.map((item: any, i: any) => (
        <Box display={'flex'} component={'div'} key={i}>
          <Button
            sx={{
              padding: 2,
              width: '250px',
              justifyContent: 'flex-start',
              borderRadius: '40px 0 0 40px',
            }}
            onClick={() => handlePlay(item.src)}
            variant='outlined'
          >
            <Box component='div' display={'flex'} alignItems={'center'} gap={2}>
              {iconState === 'play' && (
                <PlayIcon width={'25px'} height={'25px'} />
              )}
              {iconState === 'sound' && (
                <SoundIcon width={'25px'} height={'25px'} />
              )}
              {iconState === 'mute' && (
                <MuteIcon width={'25px'} height={'25px'} />
              )}
              <Stack alignItems={'flex-start'}>
                <Typography fontSize={'11px'} fontWeight={900} variant='body1'>
                  {item.title}
                </Typography>
                <Typography fontSize={'11px'} variant='body1'>
                  {item.artist}
                </Typography>
              </Stack>
            </Box>
            {currentSong && (
              <audio ref={audioRef} autoPlay>
                <source src={currentSong} type='audio/mpeg' />
                Tu navegador no admite el elemento de audio.
              </audio>
            )}
          </Button>
          <Link
            className='linkButton'
            href={
              'https://tidal.com/browse/playlist/3d95c4f6-dad5-4d7f-a469-8bde01b7771d'
            }
          >
            <TidalIcon width={'30px'} height={'30px'} />
          </Link>
        </Box>
      ))}
    </MusicPlayerBox>
  )
}

export default MusicPlayer
