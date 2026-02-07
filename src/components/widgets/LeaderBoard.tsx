import React from 'react';
import type { Leader } from '../../types';
import styles from './LeaderBoard.module.css';

interface LeaderBoardProps {
  leaders: Leader[];
  title?: string;
}

export const LeaderBoard: React.FC<LeaderBoardProps> = ({ 
  leaders, 
  title = 'Top Performing Leaders' 
}) => {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.leaderList}>
        {leaders.map((leader, index) => (
          <div key={leader.id} className={styles.leaderItem}>
            <div className={`${styles.rank} ${index < 3 ? styles.top : ''}`}>
              {index + 1}
            </div>
            <div className={styles.avatar}>
              {leader.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={styles.leaderInfo}>
              <div className={styles.leaderName}>{leader.name}</div>
              <div className={styles.leaderRole}>{leader.role}</div>
            </div>
            <div className={styles.performance}>
              <div className={styles.performanceScore}>{leader.performance}</div>
              <div className={styles.performanceLabel}>Score</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
