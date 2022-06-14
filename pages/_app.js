import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script'
import { wrapper } from '../redux/store'
import { SessionProvider } from "next-auth/react"
import { PersistGate } from 'redux-persist/integration/react';
import {useStore} from 'react-redux'
//  import { Provider } from 'react-redux';
// import {store,persistor} from "../redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  const store = useStore((state)=>state);
  return (             
     <SessionProvider session={pageProps.session}>
       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Urdan - Minimal eCommerce HTML Template</title>
      </Head>           
      <Script src='/assets/js/main.js' />      

      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>} >          
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
      :
      <PersistGate persistor={store}>          
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
      </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp)
