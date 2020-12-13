import Sidebar from '../components/sidebar/sidebar';

import '../styles/globals.scss';
import styles from '../styles/app.module.scss';
import AppBar from '../components/app-bar/appBar';

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
