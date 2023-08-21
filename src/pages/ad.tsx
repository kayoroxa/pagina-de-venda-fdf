import { useRouter } from 'next/router'
import Page1 from '../template/Page1'

export default function Home() {
  const router = useRouter()
  const { ref, popup, pag } = router.query

  // redirect
  const isPopup = popup === 'true'
  return (
    <Page1
      myRef={ref}
      // mySrc={src ? `ad-${src}` : 'ad'}
      popup={isPopup}
      pag={pag}
      ads={true}
      urlCheckout=""
      videoID="xkqp97oZncE"
    />
  )
  // return <Page1 myRef={ref} mySrc={src} popup={popup === 'true'} pag={pag} />
}
