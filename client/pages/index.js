import Head from 'next/head'
import styles from '../styles/landingPage.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Armendariz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
