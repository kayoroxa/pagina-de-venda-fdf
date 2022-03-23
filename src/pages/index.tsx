import { Grid, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'
import Button, { default as MUButton } from '@material-ui/core/Button'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle'
// import BlockIcon from '@mui/icons-material/Block'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ButtonPop from '../components/ButtonPop'
import Fac from '../components/Fac'
import ListItens from '../components/ListItens'
// import Video from '../components/Video'
import Valor from '../components/Valor'
import MainStyle from '../styles/index.style'

// const colorButton = '#b3b3b3'
const colorButton = '#00bb3e'
const buttonTitle = 'Se cadastrar agora!'

let linkCheckOut =
  'https://pay.hotmart.com/Y51115808H?off=fzv3lnkr&checkoutMode=10&split=12'
// 'https://api.whatsapp.com/send?phone=5581975010604&text=Quero%20ser%20avisado%20quando%20sair%20vagas%20novas!!%20%F0%9F%98%80'

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  paper: {
    rounded: true,
  },
  button: {
    backgroundColor: '#fff',
    color: colorButton,
    borderColor: colorButton,
    // fontSize: 'min(5vw, 20px)',
    fontSize: 'min(4vw, 17px)',
    borderRadius: '40px',
    width: 'min(90vw, 600px)',
    height: 'max(8vh, 70px)',
    '&:hover': {
      backgroundColor: colorButton,
      color: '#fff',
    },
  },
  buttonFill: {
    backgroundColor: colorButton,
    color: '#fff',
    borderColor: colorButton,
    fontSize: 'min(4vw, 17px)',
    borderRadius: '40px',
    width: 'min(90vw, 500px)',
    height: 'max(8vh, 70px)',
    '&:hover': {
      backgroundColor: colorButton,
      color: '#fff',
    },
  },
})

export default function Home() {
  const router = useRouter()
  const { ref, popup } = router.query
  const showPopupButton = popup !== 'false'

  if (ref === 'E53339888M') linkCheckOut = 'https://bit.ly/34PctC3'

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
    window?.addEventListener('scroll', myScrollFunc)
  }
  return (
    <MainStyle>
      <div className="title separado">
        <h1>
          O único curso que você vai precisar para <span>ficar fluente</span> no
          inglês
        </h1>
      </div>
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Paper elevation={3} className="video">
            <div
              style={{
                position: 'relative',
                width: '1px',
                minWidth: '100%',
                paddingBottom: '56.25%',
              }}
            >
              <div
                className="block-video"
                style={{
                  // backgroundColor: '#ff0000',
                  width: 'max(22%, 140px)',
                  height: 'max(15%, 34px)',
                  bottom: '0',
                  right: 0,
                  position: 'absolute',
                  zIndex: 20,
                }}
              />
              <iframe
                allow="autoplay"
                className="spotlightr"
                allowTransparency={true}
                style={{
                  //"width: 1px; min-width: 100%; height: 100%; position: absolute"
                  position: 'absolute',
                  width: '1px',
                  minWidth: '100%',
                  height: '100%',
                }}
                allowFullScreen={false}
                src="https://if.cdn.spotlightr.com/watch/MTIyMTYxNw==?fallback=true"
                // src="https://if.cdn.spotlightr.com/watch/MTIwNTY1OA==?fallback=true"
                frameBorder="0"
                scrolling="no"
                name="videoPlayerframe"
              ></iframe>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <Paper elevation={3} className="more">
            <ListItens />
            <Valor notColor />
          </Paper>
        </Grid>
      </Grid>

      <ButtonPop
        href={linkCheckOut}
        showPopup={showPopupButton}
        colorButton={colorButton}
        buttonTitle={buttonTitle}
      >
        <MUButton
          // href={linkCheckOut}
          variant="outlined"
          // color="default"
          size="large"
          className={classes.buttonFill}
          startIcon={<CheckBoxIcon />}
        >
          {buttonTitle}
        </MUButton>
      </ButtonPop>

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
        <div className="fixed" style={{ opacity: showCall, zIndex: 99 }}>
          <ButtonPop
            href={linkCheckOut}
            showPopup={showPopupButton}
            colorButton={colorButton}
            buttonTitle={buttonTitle}
          >
            <Button
              variant="outlined"
              // color="default"
              size="large"
              className={classes.button}
              startIcon={<CheckBoxIcon />}
              // fullWidth
            >
              {buttonTitle}
            </Button>
          </ButtonPop>
        </div>
      </Hidden>

      <Hidden smDown>
        <div className="fixed-pc" style={{ opacity: showCall, zIndex: 99 }}>
          <Grid
            container
            // spacing={2}
            alignItems="center"
            justify="space-around"
          >
            <Grid item md={4} lg={3} className="show">
              <Typography variant="subtitle1">
                Invista na sua conquista e descubra como ficar fluente no inglês
              </Typography>
            </Grid>
            <Grid item md={4} lg={3} className="show">
              <Valor removeOldValue notColor />
            </Grid>
            <Grid item md={3} lg={4} className="show">
              <ButtonPop
                showPopup={showPopupButton}
                href={linkCheckOut}
                colorButton={colorButton}
                buttonTitle={buttonTitle}
              >
                <Button
                  // href={linkCheckOut}
                  variant="outlined"
                  // color="default"
                  size="large"
                  className={classes.button}
                  style={{
                    fontSize: 'min(1.2vw, 19px)',
                    width: '100%',
                    height: 'auto',
                  }}
                  startIcon={<CheckBoxIcon />}
                  fullWidth
                >
                  {buttonTitle}
                </Button>
              </ButtonPop>
            </Grid>
          </Grid>
        </div>
        <ButtonPop
          showPopup={showPopupButton}
          href={linkCheckOut}
          colorButton={colorButton}
          buttonTitle={buttonTitle}
        >
          <Button
            // href={linkCheckOut}

            variant="outlined"
            // color="default"
            size="large"
            className={classes.buttonFill}
            startIcon={<CheckBoxIcon />}
          >
            {buttonTitle}
          </Button>
        </ButtonPop>
      </Hidden>
    </MainStyle>
  )
}
