import Head from 'next/head';
import Sidebar from '../components/sidebar/sidebar';
import AboutMe from '../components/about-me/aboutMe';

import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Armendariz - About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Sidebar />
        <AboutMe />
      </main>
    </div>
  );
}
