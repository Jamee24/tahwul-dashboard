import React from 'react';
import { dashboardData } from '../../data/dashboard';
import styles from './RecentActivitiesSection.module.css';

export const RecentActivitiesSection: React.FC = () => {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Recent Activities</h3>
      <div className={styles.activitiesList}>
        {dashboardData.activities.map((activity) => (
          <div key={activity.id} className={styles.activityItem}>
            <div className={styles.dot}></div>
            <div className={styles.activityContent}>
              <div className={styles.activityText}>{activity.text}</div>
              <div className={styles.activityTime}>{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
