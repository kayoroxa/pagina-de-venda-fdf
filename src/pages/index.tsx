import { useState } from 'react'
import IconText from '../components/IconText'
import MainStyle from '../styles/index.style'
import Button from '@material-ui/core/Button'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import ListItens from '../components/ListItens'
import Video from '../components/Video'
import Valor from '../components/Valor'

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  paper: {
    rounded: true,
  },
  button: {
    backgroundColor: '#fff',
    color: '#05990c',
    '&:hover': {
      backgroundColor: '#05990c',
      color: '#fff',
    },
  },
})

export default function Home() {
  const classes = useStyles()
  const [showCall, setShowCall] = useState(0)
  var myScrollFunc = function () {
    var y = window.scrollY
    if (y >= 3) {
      setShowCall(1)
    } else {
      setShowCall(0)
    }
  }
  if (process.browser) {
    window.addEventListener('scroll', myScrollFunc)
  }
  return (
    <MainStyle>
      <div className="title separado">
        <h1>
          <span>Ficar fluente</span> nunca foi tão fácil, aprenda tudo
          necessário <span>em 60 dias</span>!
        </h1>
      </div>
      <Grid container spacing={1} alignItems="center" justify="flex-end">
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Paper elevation={3} className="video">
            <Video url="https://www.youtube-nocookie.com/embed/5EImG1BR0Hs" />
          </Paper>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Paper elevation={3} className="more">
            <ListItens />
            <Valor />
          </Paper>
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        // color="default"
        size="large"
        className={classes.button}
        startIcon={<CheckCircleIcon />}
      >
        <b>QUERO FICAR FLUENTE</b>
      </Button>

      <div className="ao-redor">
        <img src="images/comprasegura.png" />
      </div>
      <div className="ao-redor">
        <img src="images/cartoes.png" />
      </div>

      <div className="other-background">
        <div className="title">
          <h1>
            Veja o Formula Da Fluência <span>por dentro</span>!
          </h1>
        </div>
        <Paper elevation={3} className="video">
          <Video url="https://www.youtube-nocookie.com/embed/DT3es07ISuA" />
        </Paper>
      </div>

      <Paper elevation={3} className="garantia separado">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="flex-end"
          className="grid"
        >
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src="images/garantia-grande.png" />
          </Grid>

          <Grid item lg={8} md={8} sm={12} xs={12}>
            <h1>
              <b>Confiamos no curso e em você!</b>
            </h1>
            <p>
              Se em até 7 dias você não ficar satisfeito com o curso, nos mande
              um e-mail e iremos te reembolsar completamente! Sem enganação e
              enrolação, garantia 100%.
            </p>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={10} className="fixed">
        <Button
          variant="outlined"
          // color="default"
          size="large"
          className={classes.button}
          startIcon={<CheckCircleIcon />}
        >
          <b>QUERO FICAR FLUENTE</b>
        </Button>
      </Paper>
    </MainStyle>
  )
}
