import ImageAvatar from 'app-components/Avatar';
import Links from 'app-components/Links';
import SocialMedia from 'app-components/SocialMedia';
import styles from './SidebarContent.module.scss';

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
