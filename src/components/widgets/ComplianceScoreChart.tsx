import React from 'react';
import { RadialChart } from '../charts';
import { dashboardData } from '../../data/dashboard';

export const ComplianceScoreChart: React.FC = () => {
  return (
    <RadialChart 
      value={dashboardData.complianceMetrics.overallScore} 
      title="Compliance Score"
      color="#10B981"
    />
  );
};
