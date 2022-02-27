import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from 'app-components/Layout';
import Theme from 'app-contexts/Theme';
import 'app-styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline enableColorScheme />
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
