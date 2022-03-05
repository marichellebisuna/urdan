import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (    
      <>
       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Urdan - Minimal eCommerce HTML Template</title>
        </Head>
        <Script src='/assets/js/vendor/modernizr-3.11.7.min.js' />
        <Script src='/assets/js/vendor/jquery-3.6.0.min.js' />
        <Script src='/assets/js/vendor/jquery-migrate-3.3.2.min.js' />
        <Script src='/assets/js/vendor/popper.min.js' />
        <Script src='/assets/js/vendor/bootstrap.min.js' />
        <Script src='/assets/js/plugins/wow.js' />
        <Script src='/assets/js/plugins/scrollup.js' />
        <Script src='/assets/js/plugins/aos.js' />
        <Script src='/assets/js/plugins/magnific-popup.js' />
        <Script src='/assets/js/plugins/jquery.syotimer.min.js' />
        <Script src='/assets/js/plugins/swiper.min.js' />
        <Script src='/assets/js/plugins/imagesloaded.pkgd.min.js' />
        <Script src='/assets/js/plugins/isotope.pkgd.min.js' />
        <Script src='/assets/js/plugins/jquery-ui.js' />
        <Script src='/assets/js/plugins/jquery-ui-touch-punch.js' />
        <Script src='/assets/js/plugins/jquery.nice-select.min.js' />
        <Script src='/assets/js/plugins/waypoints.min.js' />
        <Script src='/assets/js/plugins/counterup.min.js' />
        <Script src='/assets/js/plugins/select2.min.js' />
        <Script src='/assets/js/plugins/easyzoom.js' />
        <Script src='/assets/js/plugins/slinky.min.js' />
        <Script src='/assets/js/plugins/ajax-mail.js' />
        <Script src='/assets/js/main.js'/>
        
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
