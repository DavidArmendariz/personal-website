import { photo } from 'app-constants/assets';
import styles from './Avatar.module.scss';

export default function Avatar() {
  return <img className={styles.avatar} alt="Profile Picture" src={photo} />;
}
