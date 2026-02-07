import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};
