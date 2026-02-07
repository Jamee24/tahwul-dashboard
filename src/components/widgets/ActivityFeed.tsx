import React from 'react';
import type { Activity } from '../../types';
import styles from './ActivityFeed.module.css';

interface ActivityFeedProps {
  activities: Activity[];
  title?: string;
}

const activityIcons: Record<Activity['type'], string> = {
  upload: '📤',
  review: '👁️',
  approve: '✅',
  reject: '❌',
  comment: '💬',
  update: '🔄'
};

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ 
  activities, 
  title = 'Recent Activities' 
}) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.activityList}>
        {activities.map(activity => (
          <div key={activity.id} className={styles.activityItem}>
            <div className={`${styles.activityIcon} ${styles[activity.type]}`}>
              {activityIcons[activity.type]}
            </div>
            <div className={styles.activityContent}>
              <div className={styles.activityTitle}>{activity.title}</div>
              <div className={styles.activityDescription}>{activity.description}</div>
              <div className={styles.activityMeta}>
                {activity.user.name} • {formatTime(activity.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
