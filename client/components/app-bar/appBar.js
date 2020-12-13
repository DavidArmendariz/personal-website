import Link from 'next/link';
import { sidebarLinks } from '../../constants/sidebarLinks';
import styles from './appBar.module.scss';

export default function AppBar() {
  return (
    <div className={styles.container}>
      {sidebarLinks.map((link) => {
        return (
          <Link key={link.path} href={link.path}>
            <div className={styles.link}>{link.text}</div>
          </Link>
        );
      })}
    </div>
  );
}
