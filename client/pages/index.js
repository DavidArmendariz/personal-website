import Head from 'next/head';
import { Grid, Hidden } from '@material-ui/core';
import CustomAppBar from '../components/custom-app-bar/CustomAppBar';
import SideBar from '../components/sidebar/Sidebar';

import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Armendariz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hidden mdUp>
        <CustomAppBar />
      </Hidden>
      <Hidden smDown>
        <SideBar />
      </Hidden>
    </div>
  );
}
