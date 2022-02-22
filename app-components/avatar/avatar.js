import { photo } from '../../constants/assets';
import styles from './avatar.module.scss';

export default function Avatar() {
  return <img className={styles.avatar} alt="Profile Picture" src={photo} />;
}
