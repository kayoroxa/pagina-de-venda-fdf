import { Grid, Paper } from '@material-ui/core'
import { useState } from 'react'
import { useLocalStorage } from 'react-use'
import Fac from '../components/Fac'
import ListIsNot from '../organisms/ListIsNot'
import MyButton from '../organisms/MyButton'
import MyVideo from '../organisms/MyVideo'
import { DataLayerStore, useDataLayerStore } from '../store/useDataLayerStore'
import MainStyle from '../styles/index.style'

// const colorButton = '#b3b3b3'
const colorButton = '#00bb3e'
const buttonTitle = 'Se cadastrar agora!'

// const useStyles = makeStyles({
//   flexGrow: {
//     flex: '1',
//   },
//   paper: {
//     rounded: true,
//   },
//   button: {
//     backgroundColor: '#fff',
//     color: colorButton,
//     borderColor: colorButton,
//     // fontSize: 'min(5vw, 20px)',
//     fontSize: 'min(4vw, 17px)',
//     borderRadius: '40px',
//     width: 'min(90vw, 600px)',
//     height: 'max(8vh, 70px)',
//     '&:hover': {
//       backgroundColor: colorButton,
//       color: '#fff',
//     },
//   },
//   buttonFill: {
//     backgroundColor: colorButton,
//     color: '#fff',
//     borderColor: colorButton,
//     fontSize: 'min(4vw, 17px)',
//     borderRadius: '40px',
//     width: 'min(90vw, 500px)',
//     height: 'max(8vh, 70px)',
//     '&:hover': {
//       backgroundColor: colorButton,
//       color: '#fff',
//     },
//   },
// })

interface IProps {
  myRef: string | string[] | undefined
  // mySrc: string | string[] | undefined
  pag: string | string[] | undefined
  popup: boolean
  ads?: boolean
  videoID: string
  urlCheckout: string
}

export default function Page1({
  myRef,
  popup,
  pag,
  ads,
  videoID,
  urlCheckout: urlCheckoutSrc,
}: IProps) {
  const showPopupButton = popup
  const showVideoAndPrice = pag !== '2'
  let linkCheckOut = urlCheckoutSrc

  const [showPage, setShowPage] = ads
    ? useState(false)
    : useLocalStorage('showPage', false)

  // if (mySrc) {
  //   linkCheckOut += `&src=${mySrc}`
  // }

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

  const variationString = useDataLayerStore(
    (state: DataLayerStore) => state.variationString
  )

  function handleButtonClick() {
    fetch('/api/visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        variationKey: variationString,
        event: 'goToCheckout',
      }),
    })
  }

  function handleWatchVideoComplete() {
    setShowPage(true)
  }

  return (
    <MainStyle showPage={showPage}>
      <div className="title separado">
        <h3>ATENÇÃO:</h3>
        {!ads && (
          <>
            <h1 style={{ fontSize: 'min(5.8vw, 25px)' }}>
              SÓ PARA QUEM
              <br /> QUER POUPAR TEMPO <br /> E FICAR FLUENTE <br /> EM POUCOS
              MESES
            </h1>
            <p>
              Apenas para quem assistir COMPLETAMENTE esse video explicativo
              abaixo vai saber como ser aluno do curso, e{' '}
              <b>como vai funcionar</b> o método do curso.
            </p>
          </>
        )}

        {ads && (
          <>
            {/* <h1 style={{ fontSize: 'min(5.8vw, 25px)' }}>
              O que os cursinhos <span>não dizem</span>
              <br /> sobre como aprender <br />
              <span>INGLÊS RÁPIDO</span>
            </h1> */}
            <h1 style={{ fontSize: 'min(5.8vw, 25px)' }}>
              a verdade sobre <br />
              como os <span>poliglotas</span>
              <br />
              aprenderam <span>INGLÊS RÁPIDO</span>
            </h1>
          </>
        )}
      </div>
      {showVideoAndPrice && (
        <MyVideo
          ytID={videoID}
          callBack={handleWatchVideoComplete}
          showPage={showPage ? true : false}
        />
        // <MyVideo src="https://if.cdn.spotlightr.com/watch/MTIyMTYxNw==?fallback=true" />
      )}
      {/* <Grid container spacing={1} alignItems="center" justify="center">
        <MyPlan showVideoAndPrice={showVideoAndPrice} />
      </Grid> */}
      {!showPage && (
        <div style={{ padding: '0px 10px', fontSize: '20px' }}>
          Primeiro <b>assista</b> o vídeo 👆🏽 <br /> para o{' '}
          <b>acesso ser liberado</b>
        </div>
      )}
      {showPage && (
        <>
          <div onClick={handleButtonClick}>
            <MyButton
              href={linkCheckOut}
              title={buttonTitle}
              showPopup={showPopupButton}
              color={colorButton}
              myRef={myRef}
              variant="fill"
              // styleClass={classes.buttonFill}
            />
          </div>

          {/* {showVideoAndPrice && (
        <>
          <div className="ao-redor">
            <img src="images/comprasegura.png" />
          </div>
          <div className="ao-redor">
            <img src="images/cartoes.png" />
          </div>
        </>
      )} */}

          <div
            style={{
              padding: 2,
              width: '100vw',
              // background: '#0452b9',
              // color: 'white',
              // textAlign: 'center',
            }}
          >
            <div
              style={{
                padding: 2,
                margin: 'auto',
                width: 'min(90%, 780px)',
                fontSize: '1.03rem',
                // textAlign: 'center',
              }}
            >
              {/* <p>
          Você já teve aulas de inglês na sua escola? Provavelmente já teve
          contato com aprender inglês...
        </p> */}
              <p>
                Mesmo <b>TODAS AS ESCOLAS</b> do brasil tendo o inglês como
                matéria, você sabia que apenas <b>5% do brasil sabe inglês</b>?
              </p>
              <p>
                E não quer dizer que essas pessoas são mais especiais que as
                outras, e sim que existe formas rápida e efetiva de aprender
                inglês, que não se aprende nas escolas.
              </p>
              {/* <p>
          Com o método que eu vou te apresentar hoje, é uma ponte para que você
          não precise se melar de lama.
        </p> */}

              {/* <p>
          Eu comecei me aventurar aprendendo inglês mas não sabia um método...
        </p> */}
              <p>
                Depois de eu revirar a internet em busca de um bom método,
                juntei uma espécie de <b>formula para aprender inglês</b>..
              </p>
              <p>
                <b>Depois de incontáveis dias</b> testando e refinando técnicas
                avançadas. Hoje posso dizer que sei falar a lingua mais
                importante do mundo.
              </p>
              <p>
                O inglês me abriu portas e oportunidades, que hoje eu não
                saberia o que seria da minha vida sem..
              </p>
              {/* <p>
            <b style={{ color: '#0ba861' }}>A boa noticia</b> é que você não vai
            precisar passar pelo que eu passei. Juntei tudo que funciona para
            aprender inglês em <b>1 terço do tempo</b>
          </p> */}
              <p>
                <b style={{ color: '#0ba861' }}>A boa noticia</b> é que você não
                vai precisar pagar com seu tempo e dinheiro oque eu precisei
                pagar, não precisando passar incontáveis dias refinando as
                técnicas que eu refinei.
              </p>
              <p>
                Juntei tudo que eu sei que funciona, e montei de uma forma pra{' '}
                <b>reduzir 90% do tempo</b> que leva pra aprender
              </p>
              <p>
                Aqui está o método que vai trazer os novos bilíngue do brasil
              </p>
            </div>
          </div>
          <h3
            style={{
              textAlign: 'center',
              fontSize: 'min(8vw, 40px)',
              padding: '0 min(6vw, 20px)',
              marginBottom: 0,
              lineHeight: '0.98',
            }}
          >
            O incrível método <br />
            Formula da fluência
          </h3>

          <ListIsNot />

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
                  Se em até 7 dias você não ficar satisfeito com o curso, nos
                  mande um e-mail e iremos te reembolsar completamente! Sem
                  enganação e enrolação, garantia 100%.
                </p>
              </Grid>
            </Grid>
          </Paper>

          {/* <Hidden mdUp> */}
          <div className="fixed" style={{ opacity: showCall, zIndex: 99 }}>
            <MyButton
              href={linkCheckOut}
              title={buttonTitle}
              showPopup={showPopupButton}
              color={colorButton}
              myRef={myRef}
              variant="outlined"
              // styleClass={classes.button}
            />
          </div>
          {/* </Hidden> */}
        </>
      )}

      {ads && (
        <div className="politics">
          <a href="/politicas-privacidade">politicas e privacidade</a>
          <a href="/termos-de-uso">termos de uso</a>
        </div>
      )}
    </MainStyle>
  )
}
