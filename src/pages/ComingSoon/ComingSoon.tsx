import React from 'react';
import styles from './ComingSoon.module.css';

export const ComingSoon: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Coming Soon!</h1>
        <p className={styles.subtitle}>This feature is under development</p>
      </div>
    </div>
  );
};
