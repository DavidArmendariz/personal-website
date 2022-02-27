import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'app-components/Layout';
import { ThemeProvider } from 'app-contexts/Theme';
import 'app-styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
