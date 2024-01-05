import { AppProps } from 'next/app';
import Layout from '@app-components/Layout';
import { ThemeProvider } from '@app-contexts/Theme';
import 'app-styles/globals.css';

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default Home;
