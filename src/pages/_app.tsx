import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/reset.css'
// import TagManager from 'react-gtm-module'
import theme from '../theme'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyApp(props: any) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init('1253070028830250') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  // useEffect(() => {
  //   TagManager.initialize({ gtmId: 'GTM-WCK22R7' })
  // }, [])

  return (
    <React.Fragment>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3G9X4JLLWX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3G9X4JLLWX');
        `}
      </Script> */}
      <Head>
        <title>Formula Da Fluência</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="facebook-domain-verification"
          content="tgiy0cfbswijmlfrufm5lz6obonopl"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
