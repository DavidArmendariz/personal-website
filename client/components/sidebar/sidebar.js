import SidebarContent from '../sidebar-content/sidebarContent';

import styles from './sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <SidebarContent />
    </div>
  );
}
