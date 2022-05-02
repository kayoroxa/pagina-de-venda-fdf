import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    button: {
      fontWeight: 700,
    },
  },
  // Button: {
  //   fontSize: 'min(5vw, 30px)',
  //   borderRadius: '40px',
  //   width: 'min(90vw, 500px)',
  //   height: 'max(8vh, 70px)',
  // },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
