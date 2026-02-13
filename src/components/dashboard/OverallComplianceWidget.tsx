import React from 'react';
import styles from './OverallComplianceWidget.module.css';

export const OverallComplianceWidget: React.FC = () => {
  const percentage = 65;
  const radius = 70;
  const circumference = Math.PI * radius; // Semi-circle circumference
  const progress = (percentage / 100) * circumference;
  const strokeDashoffset = circumference - progress;

  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Overall Compliance Score</h3>
      <div className={styles.chartContainer}>
        <svg width="258" height="208" viewBox="0 0 200 130" className={styles.chart}>
          {/* Background semi-circle */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="#F3F4F6"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Progress semi-circle */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="#EF4444"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={styles.progressCircle}
          />
        </svg>
        <div className={styles.scoreOverlay}>
          <div className={styles.scoreValue}>{percentage}%</div>
          <div className={styles.scoreLabel}>Basic Standards 2025</div>
        </div>
      </div>
    </div>
  );
};

export default OverallComplianceWidget;
