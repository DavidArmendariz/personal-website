import Head from 'next/head';
import { styled } from '@mui/system';
import Layout from 'app-components/Layout';
import 'app-styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
