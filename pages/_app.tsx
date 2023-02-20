import '../styles/globals.css'


import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header';
import Footer from './components/Footer';





function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );}

export default MyApp
