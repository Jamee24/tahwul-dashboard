import React from 'react';
import type { PerspectiveProgress } from '../../types';
import styles from './PerspectiveCard.module.css';

interface PerspectiveCardProps {
  data: PerspectiveProgress;
}

export const PerspectiveCard: React.FC<PerspectiveCardProps> = ({ data }) => {
  const { perspective, leader, metrics, progress } = data;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>{perspective}</h4>
        {leader && (
          <div className={styles.leader}>
            <div className={styles.avatar}>
              {leader.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={styles.leaderInfo}>
              <div className={styles.leaderName}>{leader.name}</div>
              <div className={styles.leaderRole}>{leader.role}</div>
            </div>
          </div>
        )}
      </div>

      {metrics && (
        <div className={styles.metrics}>
          {metrics.map((metric, index) => {
            const percentage = Math.round((metric.value / metric.total) * 100);
            return (
              <div key={index} className={styles.metric}>
                <div className={styles.circularProgress}>
                  <svg className={styles.progressRing} viewBox="0 0 120 120">
                    <circle
                      className={styles.progressRingBackground}
                      cx="60"
                      cy="60"
                      r="50"
                    />
                    <circle
                      className={styles.progressRingFill}
                      cx="60"
                      cy="60"
                      r="50"
                      style={{
                        strokeDasharray: `${percentage * 3.14} 314`,
                        strokeDashoffset: '0'
                      }}
                    />
                  </svg>
                  <div className={styles.progressValue}>{metric.value}</div>
                </div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            );
          })}
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.overallProgress}>
          <div className={styles.progressLabel}>Overall Progress</div>
          <div className={styles.progressPercentage}>{progress}%</div>
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressBarFill} 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
