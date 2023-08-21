import { useRouter } from 'next/router'
import { useEffect } from 'react'
import config from '../config'
import Page1 from '../template/Page1'

export default function Home() {
  const router = useRouter()
  const { ref, pag, src } = router.query

  const { videoID, linkCheckOut, vslName, price, showPageSec } = config

  // const { checkoutAndPrice, video } = variables

  // let { link: linkCheckOut, value: price } = getRandom<{
  //   link: string
  //   value: number
  // }>(checkoutAndPrice).data

  // const videosFiltered = video.filter(v => v.data.value === price)

  // let videoSelected = getRandom<{ value: number; youtubeVideoId: string }>(
  //   videosFiltered
  // )

  // if (ref === 'E53339888M')
  //   linkCheckOut = !showVideoAndPrice
  //     ? 'https://forms.gle/ySuoH6zZrBw2H15S6'
  //     : 'https://bit.ly/34PctC3'

  const variation = {
    vslName,
    vslID: videoID,
    price,
    buttonSec: showPageSec,
  }

  // "pb-45_omega_397_sec-600"
  const variationString = `${
    src || 'none'
  }_${vslName}_${price}_sec-${showPageSec}`

  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: 'AB infos',
      ...variation,
    })

    fetch('/api/visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Insomnia/2023.5.3',
      },
      body: JSON.stringify({
        variationKey: variationString,
      }),
    })
  }, [])

  const linkCheckoutSrc = linkCheckOut + `&src=${variationString}`

  return (
    <Page1
      myRef={ref}
      // mySrc={src}
      popup={false}
      pag={pag}
      videoID={videoID}
      urlCheckout={linkCheckoutSrc}
    />
  )
  // return <Page1 myRef={ref} mySrc={src} popup={popup === 'true'} pag={pag} />
}
