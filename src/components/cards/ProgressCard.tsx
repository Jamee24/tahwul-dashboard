import React from 'react';
import styles from './ProgressCard.module.css';

interface ProgressCardProps {
  label: string;
  percentage: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ label, percentage }) => {
  return (
    <div className={styles.progressCard}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage.toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default ProgressCard;
