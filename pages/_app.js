import AppBar from 'app-components/app-bar/appBar';
import Sidebar from 'app-components/sidebar/sidebar';
import styles from '../styles/app.module.scss';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.appBar}>
          <AppBar />
        </div>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
