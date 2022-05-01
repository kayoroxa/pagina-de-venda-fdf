import { Grid, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'
import { useState } from 'react'
import Fac from '../components/Fac'
import Valor from '../components/Valor'
import MyButton from '../organisms/MyButton'
import MyPlan from '../organisms/MyPlan'
import MyVideo from '../organisms/MyVideo'
import MainStyle from '../styles/index.style'

// const colorButton = '#b3b3b3'
const colorButton = '#00bb3e'
const buttonTitle = 'Se cadastrar agora!'

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

interface IProps {
  myRef: string | string[] | undefined
  mySrc: string | string[] | undefined
  pag: string | string[] | undefined
  popup: boolean
}

export default function Page1({ myRef, mySrc, popup, pag }: IProps) {
  const showPopupButton = popup
  const showVideoAndPrice = pag !== '2'
  let linkCheckOutDemo =
    'https://pay.hotmart.com/Y51115808H?off=xnuk90zx&checkoutMode=10'

  let linkCheckOut = !showVideoAndPrice
    ? 'https://forms.gle/TmDRqpZtPNrUPLiW7'
    : 'https://pay.hotmart.com/Y51115808H?off=fzv3lnkr&checkoutMode=10&split=12'
  // 'https://api.whatsapp.com/send?phone=5581975010604&text=Quero%20saber%20mais%20sobre%20o%20curso!!'

  if (myRef === 'E53339888M')
    linkCheckOut = !showVideoAndPrice
      ? 'https://forms.gle/ySuoH6zZrBw2H15S6'
      : 'https://bit.ly/34PctC3'

  if (mySrc) {
    linkCheckOut += `&src=${mySrc}`
  }
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
        {showVideoAndPrice && (
          <MyVideo ytID="XCzLIMUfBpU" />
          // <MyVideo src="https://if.cdn.spotlightr.com/watch/MTIyMTYxNw==?fallback=true" />
        )}
        <MyPlan showVideoAndPrice={showVideoAndPrice} />
      </Grid>

      <MyButton
        href={linkCheckOut}
        title={buttonTitle}
        showPopup={showPopupButton}
        color={colorButton}
        myRef={myRef}
        styleClass={classes.buttonFill}
      />

      {showVideoAndPrice && (
        <>
          <div className="ao-redor">
            <img src="images/comprasegura.png" />
          </div>
          <div className="ao-redor">
            <img src="images/cartoes.png" />
          </div>
        </>
      )}

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
          <MyButton
            href={linkCheckOut}
            title={buttonTitle}
            showPopup={showPopupButton}
            color={colorButton}
            myRef={myRef}
            styleClass={classes.button}
          />
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
              {showVideoAndPrice && <Valor removeOldValue notColor />}
            </Grid>
            <Grid item md={3} lg={4} className="show">
              <MyButton
                href={linkCheckOut}
                title={buttonTitle}
                showPopup={showPopupButton}
                color={colorButton}
                myRef={myRef}
                styleClass={classes.button}
                styleInject={{
                  fontSize: 'min(1.2vw, 19px)',
                  width: '100%',
                  height: 'auto',
                }}
                fullWidth
              />
            </Grid>
          </Grid>
        </div>
        <MyButton
          href={linkCheckOut}
          title={buttonTitle}
          showPopup={showPopupButton}
          color={colorButton}
          myRef={myRef}
          styleClass={classes.buttonFill}
        />
      </Hidden>
    </MainStyle>
  )
}
