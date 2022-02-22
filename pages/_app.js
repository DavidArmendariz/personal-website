import AppBar from 'app-components/AppBar';
import Sidebar from 'app-components/Sidebar';
import styles from 'app-styles/app.module.scss';
import 'app-styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
