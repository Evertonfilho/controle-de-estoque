import { AppProps } from 'next/app'
import { Dashboard } from '../components/Dashboard'
import '../styles/global.css'


function MyApp({ Component, pageProps }: AppProps) {



  return (
    <>
      <Dashboard/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
