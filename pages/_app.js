import '../styles/globals.css'
import Head from 'next/head'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500&display=swap" rel="stylesheet"></link>
    
    </Head>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </>
  )
}

export default MyApp
