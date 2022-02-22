import SidebarContent from 'app-components/SidebarContent';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <SidebarContent />
    </div>
  );
}
