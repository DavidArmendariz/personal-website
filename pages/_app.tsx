import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from 'app-components/Layout';
import Theme from 'app-contexts/Theme';
import 'app-styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
};

export default MyApp;
