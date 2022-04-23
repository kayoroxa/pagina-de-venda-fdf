import { useRouter } from 'next/router'
import PageOnlyButton from '../template/PageOnlyButton'

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
