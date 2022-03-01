import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/Script'

function MyApp({ Component, pageProps }) {
  return (       
      <>
       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Urdan - Minimal eCommerce HTML Template</title>           
       </Head> 

        <Script src='/assets/js/vendor/modernizr-3.11.7.min.js' strategy="beforeInteractive"></Script>         
        <Script src='/assets/js/vendor/jquery-3.6.0.min.js' strategy="beforeInteractive"></Script>
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/vendor/popper.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/vendor/bootstrap.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/wow.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/scrollup.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/aos.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/magnific-popup.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/jquery.syotimer.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/swiper.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/imagesloaded.pkgd.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/isotope.pkgd.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/jquery-ui.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/jquery-ui-touch-punch.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/jquery.nice-select.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/waypoints.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/counterup.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/select2.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/easyzoom.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/slinky.min.js' strategy="beforeInteractive"></Script>
        <Script src='/assets/js/plugins/ajax-mail.js' strategy="beforeInteractive"></Script>  
        <Script src='/assets/js/main.js' ></Script> 
      
      <Layout>     
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
