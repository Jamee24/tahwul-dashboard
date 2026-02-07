import React from 'react';
import { PerformanceChart } from '../charts';
import { dashboardData } from '../../data/dashboard';

export const PerformanceBarChart: React.FC = () => {
  return (
    <PerformanceChart 
      data={dashboardData.performanceData}
      title="12-Month Performance"
    />
  );
};
