import React from 'react';
import { dashboardData } from '../../data/dashboard';
import styles from './MonthlyPerformanceChart.module.css';

export const MonthlyPerformanceChart: React.FC = () => {
  const maxValue = 100;

  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>12-Month Performance</h3>
      <div className={styles.chartContainer}>
        <div className={styles.yAxis}>
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>
        <div className={styles.chart}>
          <div className={styles.gridLines}>
            {[0, 20, 40, 60, 80, 100].map((line) => (
              <div
                key={line}
                className={styles.gridLine}
                style={{ bottom: `${line}%` }}
              />
            ))}
          </div>
          <div className={styles.bars}>
            {dashboardData.performanceData.map((data) => (
              <div key={data.month} className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ height: `${(data.value / maxValue) * 100}%` }}
                >
                  <div className={styles.barGradient} />
                </div>
                <span className={styles.monthLabel}>{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPerformanceChart;
