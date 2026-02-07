import React from 'react';
import { RadialChart } from '../charts';
import { dashboardData } from '../../data/dashboard';

export const AuditReadinessChart: React.FC = () => {
  return (
    <RadialChart 
      value={dashboardData.complianceMetrics.auditReadiness} 
      title="Audit Readiness"
      color="#3B82F6"
    />
  );
};
