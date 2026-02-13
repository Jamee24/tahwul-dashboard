import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
      <div className={`${styles.main} ${sidebarOpen ? styles.mainWithSidebar : ''}`}>
        <Navbar onMenuClick={handleToggleSidebar} />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};
