import { sidebarLinks } from 'app-constants/sidebar-links';
import Link from 'next/link';
import styles from './Links.module.scss';

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
