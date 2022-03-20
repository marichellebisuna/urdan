import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script'
import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }) {

  return (    
      <>
       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Urdan - Minimal eCommerce HTML Template</title>

      </Head>
          {/* <Script src='/assets/js/vendor/modernizr-3.11.7.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/vendor/jquery-3.6.0.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/vendor/jquery-migrate-3.3.2.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/vendor/popper.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/vendor/bootstrap.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/wow.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/scrollup.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/aos.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/magnific-popup.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/jquery.syotimer.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/swiper.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/imagesloaded.pkgd.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/isotope.pkgd.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/jquery-ui.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/jquery-ui-touch-punch.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/jquery.nice-select.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/waypoints.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/counterup.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/select2.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/easyzoom.js'   crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/slinky.min.js'  crossorigin="anonymous"></script>
          <Script src='/assets/js/plugins/ajax-mail.js'  crossorigin="anonymous"></script>*/}
           {/* <Script src='/assets/js/plugins/swiper.min.js' strategy="lazyOnload"/> */}
          <Script src='/assets/js/main.js' />  
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </>
  );
}

export default wrapper.withRedux(MyApp)
