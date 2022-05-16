import {AppProps} from 'next/app'
import { Header } from '../components/PaginaInicial'
import '../styles/global.css'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
