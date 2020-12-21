import '../styles/globals.css'
import Head from 'next/head'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no"/>
    </Head>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </>
  )
}

export default MyApp
