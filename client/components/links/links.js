import { sidebarLinks } from '../../constants/sidebarLinks';
import Link from 'next/link';

import styles from './links.module.scss';

export default function Links() {
  return (
    <div className={styles.container}>
      {sidebarLinks.map(({ path, icon, text }) => {
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
