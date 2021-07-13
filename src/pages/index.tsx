import { useState } from 'react'
import MainStyle from '../styles/index.style'
import Button from '@material-ui/core/Button'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Grid, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'
import ListItens from '../components/ListItens'
import Video from '../components/Video'
import Valor from '../components/Valor'
import Fac from '../components/Fac'

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  paper: {
    rounded: true,
  },
  button: {
    backgroundColor: '#fff',
    color: '#5fb100',
    borderColor: '#5fb100',
    fontSize: 'min(5vw, 20px)',
    borderRadius: '40px',
    width: 'min(90vw, 500px)',
    height: 'max(8vh, 70px)',
    '&:hover': {
      backgroundColor: '#5fb100',
      color: '#fff',
    },
  },
  buttonFill: {
    backgroundColor: '#5fb100',
    color: '#fff',
    borderColor: '#5fb100',
    fontSize: 'min(5vw, 20px)',
    borderRadius: '40px',
    width: 'min(90vw, 500px)',
    height: 'max(8vh, 70px)',
    '&:hover': {
      backgroundColor: '#7fcf23',
      color: '#fff',
    },
  },
})

export default function Home() {
  const linkCheckOut =
    'https://pay.hotmart.com/Y51115808H?off=9g7hziuc&checkoutMode=10'
  const classes = useStyles()
  const [showCall, setShowCall] = useState(0)
  var myScrollFunc = function () {
    var y = window.scrollY
    if (y >= 400) {
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
          [VEJA] o <span>CURSO COMPLETO DE INGLÊS</span> formula da fluência{' '}
          <span>POR DENTRO</span>
        </h1>
      </div>
      <Grid container spacing={1} alignItems="center" justify="flex-end">
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Paper elevation={3} className="video">
            <Video url="https://www.youtube-nocookie.com/embed/DT3es07ISuA" />
          </Paper>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Paper elevation={3} className="more">
            <ListItens />
            <Valor removeOldValue={true} />
          </Paper>
        </Grid>
      </Grid>

      <Button
        href={linkCheckOut}
        variant="outlined"
        // color="default"
        size="large"
        className={classes.buttonFill}
        startIcon={<CheckCircleIcon />}
      >
        QUERO FICAR FLUENTE
      </Button>

      <div className="ao-redor">
        <img src="images/comprasegura.png" />
      </div>
      <div className="ao-redor">
        <img src="images/cartoes.png" />
      </div>

      {/* <div className="other-background">
        <div className="title">
          <h1>
            Veja o Formula Da Fluência <span>por dentro</span>!
          </h1>
        </div>
        <Paper elevation={3} className="video">
          <Video url="https://www.youtube-nocookie.com/embed/DT3es07ISuA" />
        </Paper>
      </div> */}

      <Fac />

      <Paper elevation={3} className="garantia separado">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="flex-end"
          className="grid"
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <img src="images/garantia-grande.png" />
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={8}>
            <h2>
              <b>Confiamos no curso e em você!</b>
            </h2>
            <p>
              Se em até 7 dias você não ficar satisfeito com o curso, nos mande
              um e-mail e iremos te reembolsar completamente! Sem enganação e
              enrolação, garantia 100%.
            </p>
          </Grid>
        </Grid>
      </Paper>

      <Hidden mdUp>
        <div className="fixed" style={{ opacity: showCall }}>
          <Button
            href={linkCheckOut}
            variant="outlined"
            // color="default"
            size="large"
            className={classes.button}
            startIcon={<CheckCircleIcon />}
            // fullWidth
          >
            QUERO FICAR FLUENTE
          </Button>
        </div>
      </Hidden>

      <Hidden smDown>
        <div className="fixed-pc" style={{ opacity: showCall }}>
          <Grid
            container
            // spacing={2}
            alignItems="center"
            justify="space-around"
          >
            <Grid item md={4} lg={4} className="show">
              <Typography variant="h6">
                Invista na sua conquista e descubra como ficar fluente no inglês
              </Typography>
            </Grid>
            <Grid item md={4} lg={3} className="show">
              <Valor removeOldValue notColor />
            </Grid>
            <Grid item md={3} lg={3} className="show">
              <Button
                href={linkCheckOut}
                variant="outlined"
                // color="default"
                size="large"
                className={classes.button}
                style={{
                  fontSize: 'min(1.4vw, 20px)',
                  width: '100%',
                  height: 'auto',
                }}
                startIcon={<CheckCircleIcon />}
                fullWidth
              >
                QUERO FICAR FLUENTE
              </Button>
            </Grid>
          </Grid>
        </div>

        <Button
          href={linkCheckOut}
          variant="outlined"
          // color="default"
          size="large"
          className={classes.buttonFill}
          startIcon={<CheckCircleIcon />}
        >
          OK. QUERO FICAR FLUENTE
        </Button>
      </Hidden>
    </MainStyle>
  )
}
