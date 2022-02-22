import ImageAvatar from '../avatar/avatar';
import Links from '../links/links';
import SocialMedia from '../social-media/socialMedia';
import styles from './sidebarContent.module.scss';

export default function SidebarContent() {
  return (
    <div className={styles.container}>
      <ImageAvatar />
      <div className={styles.aboutMe}>
        Hi! My name is David Armendáriz. I am an ecuadorian mathematician and
        software developer. Welcome!
      </div>
      <SocialMedia />
      <Links />
    </div>
  );
}
