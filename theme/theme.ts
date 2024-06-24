import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// interface micolor {
//   gradient: {
//     main: String
//   }
// }

// declare module '@mui/material/styles' {
//   interface Palette extends micolor {}
//   interface PaletteOptions extends micolor {}
// }


const colors = {
  primary: {
    // main: '#252E57',
    // light: '#99D5FF'
    // light: '#394e9a80'
  },
  secondary: {
    // main: '#384d99'
    // main: '#077BE7'
  },
  text: {
    primary: '#000',
    secondary: '#fff',
  },
 
}

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary
      },
    },
    typography: {
      fontFamily: ['NeueMachina', 'Helvetica', 'Arial'].join(','),
      // h1: {
      //   fontSize: '4.375rem',
      //   fontFamily: 'Nulshock'
      //   //     fontWeight: 700,
      // }
      button: {
        fontSize: 12,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            ':disabled': {
              background: 'rgba(0, 0, 0, 0.12)'
            }
          },
          outlinedPrimary: {
            // fontWeight: '700',
            border: 'solid 1px #000',
            borderRadius: 40,
            position: 'relative',
            color: colors.text.primary,
            background: 'transparent',
            transition: 'background .2s ease-out,color .2s ease-out',
            '&:hover': {
              background: '#fff',
            }
          }
        }
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            width: '100%',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'NeueMachina';
            font-weight: 300;
            src: local('NeuMachina'), url(/fonts/neueMachina/NeueMachina-Light.ttf) format('truetype');
          }
          @font-face {
            font-family: 'NeueMachina';
            font-weight: 400;
            src: local('Saira'), url(/fonts/neueMachina/NeueMachina-Regular.ttf) format('truetype');
          }
          @font-face {
            font-family: 'NeueMachina';
            font-weight: 800;
            src: local('Saira'), url(/fonts/neueMachina/NeueMachina-Ultrabold.ttf) format('truetype');
          }
        `,
      },
    },
  })
)

export default theme
