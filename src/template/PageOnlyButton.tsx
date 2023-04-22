import { Grid } from '@material-ui/core'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MyButton from '../organisms/MyButton'
import MyVideo from '../organisms/MyVideo'
import MainStyle from '../styles/index.style'

// const colorButton = '#b3b3b3'
const colorButton = '#00bb3e'
const buttonTitle = 'Quero saber mais!'

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
  mySrc: string | string[] | undefined
  pag: string | string[] | undefined
  popup: boolean
}

export default function PageOnlyButton({ myRef, mySrc, popup, pag }: IProps) {
  const showPopupButton = popup
  const showVideoAndPrice = pag !== '2'

  let linkCheckOut =
    'https://api.whatsapp.com/send?phone=5581975010604&text=Quero%20saber%20mais%20sobre%20o%20curso!!'

  if (myRef === 'E53339888M')
    linkCheckOut = !showVideoAndPrice
      ? 'https://forms.gle/ySuoH6zZrBw2H15S6'
      : 'https://bit.ly/34PctC3'

  if (mySrc) {
    linkCheckOut += `&src=${mySrc}`
  }
  // const classes = useStyles()
  // const [showCall, setShowCall] = useState(0)
  // var myScrollFunc = function () {
  //   var y = window.scrollY
  //   if (y >= 400) {
  //     setShowCall(1)
  //   } else {
  //     setShowCall(0)
  //   }
  // }
  // if (process.browser) {
  //   window?.addEventListener('scroll', myScrollFunc)
  // }
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
          <MyVideo
            src="https://if.cdn.spotlightr.com/watch/MTIyMTYxNw==?fallback=true"
            showPage={false}
          />
        )}
        {/* <MyPlan showVideoAndPrice={showVideoAndPrice} /> */}
      </Grid>
      <MyButton
        href={linkCheckOut}
        title={buttonTitle}
        showPopup={showPopupButton}
        color={colorButton}
        myRef={myRef}
        // styleClass={classes.buttonFill}
        icon={<WhatsAppIcon />}
      />
    </MainStyle>
  )
}
