import Head from 'next/head';
import Layout from 'app-components/Layout';
import Theme from 'app-contexts/Theme';
import 'app-styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
