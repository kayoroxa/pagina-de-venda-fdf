import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-7Z7FKSR0Z4"
          ></script> */}
          {/* <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-7Z7FKSR0Z4', {linker : {'domains' : ['hotmart.com']}});`,
            }}
          /> */}

          <script
            id="hotmart_launcher_script"
            dangerouslySetInnerHTML={{
              __html: `
                    (function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
                    (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
                    e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
                    })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');

                    hot('account','24fba127-d8f3-43f9-8182-1549b5debcf4');
            `,
            }}
          />
          <script
            id="tag manager"
            dangerouslySetInnerHTML={{
              __html: `<!-- Google Tag Manager -->
              <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WCK22R7');</script>
              <!-- End Google Tag Manager -->`,
            }}
          />
        </Head>
        <body>
          <script
            id="tag manager 2"
            dangerouslySetInnerHTML={{
              __html: `<!-- Google Tag Manager (noscript) -->
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCK22R7"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              <!-- End Google Tag Manager (noscript) -->`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
