import { useRouter } from 'next/router'
import config from '../config'
import Page1 from '../template/Page1'

export default function Home() {
  const router = useRouter()
  const { ref, popup, pag, src } = router.query

  const { videoID } = config

  // redirect
  const isPopup = popup === 'true'
  return (
    <Page1
      myRef={ref}
      mySrc={src}
      popup={isPopup}
      pag={pag}
      videoID={videoID}
    />
  )
  // return <Page1 myRef={ref} mySrc={src} popup={popup === 'true'} pag={pag} />
}
