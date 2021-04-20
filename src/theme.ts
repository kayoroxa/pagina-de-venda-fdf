import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
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
