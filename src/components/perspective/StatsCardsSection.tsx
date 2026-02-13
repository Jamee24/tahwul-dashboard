import React from 'react';
import styles from './StatsCardsSection.module.css';
import { perspectiveStats } from '../../data/perspectiveDetails';

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIcon}>
        {icon}
      </div>
      <div>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
      </div>
    </div>
  );
};

export const StatsCardsSection: React.FC = () => {
  return (
    <div className={styles.statsGrid}>
      {perspectiveStats.map((stat) => (
        <StatCard
          key={stat.id}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export default StatsCardsSection;
