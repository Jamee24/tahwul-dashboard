import React from 'react';
import ProgressCard from '../cards/ProgressCard';
import StepIndicator from '../cards/StepIndicator';
import { dashboardData } from '../../data/dashboard';
import styles from './ProgressGrid.module.css';

export const ProgressGrid: React.FC = () => {
  return (
    <div className={styles.progressSection}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Progress Status</h2>
        <div className={styles.statusLegend}>
          <div className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.notStarted}`}></span>
            <span className={styles.statusLabel}>Not Started</span>
          </div>
          <div className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.inProgress}`}></span>
            <span className={styles.statusLabel}>In Progress</span>
          </div>
          <div className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.completed}`}></span>
            <span className={styles.statusLabel}>Completed</span>
          </div>
          <div className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.partiallyUploaded}`}></span>
            <span className={styles.statusLabel}>Partially Uploaded</span>
          </div>
          <div className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.fullyUploaded}`}></span>
            <span className={styles.statusLabel}>Fully Uploaded</span>
          </div>
          <div className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.delayed}`}></span>
            <span className={styles.statusLabel}>Delayed</span>
          </div>
        </div>
      </div>
      
      <div className={styles.columnsGrid}>
        {dashboardData.progressColumns.map((column) => (
          <div key={column.label} className={styles.column}>
            <ProgressCard 
              label={column.label}
              percentage={column.percentage}
            />
            <div className={styles.columnItems}>
              {column.items.map((item) => (
                <StepIndicator 
                  key={item.label}
                  label={item.label}
                  tasks={item.tasks}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressGrid;
