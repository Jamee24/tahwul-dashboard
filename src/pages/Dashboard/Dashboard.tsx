import React from 'react';
import {
  ProjectTimeline,
  ProgressGrid,
  OverallComplianceWidget,
  TopPerformersWidget,
  RecentActivitiesSection,
  MonthlyPerformanceChart,
  AuditReadinessSection,
  StatsCardsWidget
} from '../../components/widgets';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>

      <div className={styles.timelineSection}>
        <ProjectTimeline />
      </div>

      <div className={styles.statsSection}>
        <StatsCardsWidget />
      </div>

      <div className={styles.progressSection}>
        <ProgressGrid />
      </div>

      <div className={styles.dashboardWidgetsRow}>
        <div className={styles.complianceWidget}>
          <OverallComplianceWidget />
        </div>
        <div className={styles.performersWidget}>
          <TopPerformersWidget />
        </div>
        <div className={styles.activitiesWidget}>
          <RecentActivitiesSection />
        </div>
      </div>

      <div className={styles.dashboardChartsRow}>
        <div className={styles.performanceChart}>
          <MonthlyPerformanceChart />
        </div>
        <div className={styles.auditWidget}>
          <AuditReadinessSection />
        </div>
      </div>
    </div>
  );
};
