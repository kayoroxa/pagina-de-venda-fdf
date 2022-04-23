import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import PageOnlyButton from '../template/PageOnlyButton'

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

export default function Home() {
  const router = useRouter()
  const { ref, popup, pag, src } = router.query

  // redirect

  return (
    <PageOnlyButton
      myRef={ref}
      mySrc={src}
      popup={popup === 'true'}
      pag={pag}
    />
  )
  // return <Page1 myRef={ref} mySrc={src} popup={popup === 'true'} pag={pag} />
}
