import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script'
import { wrapper } from '../redux/store'
 import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }}) {

  return (    
      <>
     <SessionProvider session={pageProps.session}>
       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Urdan - Minimal eCommerce HTML Template</title>

      </Head>
           
          <Script src='/assets/js/main.js' />  
          
         
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </SessionProvider>
     
    </>
  );
}

export default wrapper.withRedux(MyApp)
