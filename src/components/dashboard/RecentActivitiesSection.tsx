import React from 'react';
import styles from './RecentActivitiesSection.module.css';
import { dashboardData } from '../../data/dashboard';

export const RecentActivitiesSection: React.FC = () => {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Recent Activities</h3>
      <div className={styles.activityList}>
        {dashboardData.activities.map((act) => (
          <div key={act.id} className={styles.activityItem}>
            <div className={styles.dot}></div>
            <div className={styles.activityContent}>
              <div className={styles.activityText}>{act.text}</div>
              <div className={styles.activityTime}>{act.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivitiesSection;
