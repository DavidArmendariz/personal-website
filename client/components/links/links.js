import React from 'react';
import styles from './links.module.scss';
import { paths } from '../../constants/paths';
import Link from 'next/link';

export default function Links() {
  return (
    <div className={styles.container}>
      {paths.map(({ path, icon, text }) => {
        return (
          <Link key={path} href={path}>
            <div className={styles.link}>
              <div>{icon}</div>
              <div>{text}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
