import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  label?: string;
  value: number;
  showPercentage?: boolean;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  value, 
  showPercentage = true,
  color = '#3B82F6',
  size = 'medium'
}) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={`${styles.progressBar} ${styles[size]}`}>
      {(label || showPercentage) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showPercentage && <span className={styles.percentage}>{clampedValue}%</span>}
        </div>
      )}
      <div className={styles.track}>
        <div 
          className={styles.fill} 
          style={{ width: `${clampedValue}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};
