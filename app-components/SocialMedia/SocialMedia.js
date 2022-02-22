import React from 'react';
import { socialMediaLinks } from 'app-constants/sidebar-links';
import Link from 'next/link';
import styles from './SocialMedia.module.scss';

const iconSize = 32;

export default function SocialMedia() {
  return (
    <div className={styles.container}>
      {socialMediaLinks.map((link) => {
        const Icon = React.cloneElement(link.icon, { size: iconSize });
        return (
          <Link key={link.url} href={link.url}>
            <a target="_blank" rel="noreferrer">
              <div className={styles.icon}>{Icon}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
