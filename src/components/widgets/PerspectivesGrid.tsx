import React from 'react';
import { PerspectiveGrid } from './PerspectiveGrid';
import { dashboardData } from '../../data/dashboard';

export const PerspectivesGrid: React.FC = () => {
  return (
    <PerspectiveGrid 
      perspectives={dashboardData.perspectiveProgress}
      title="Progress Status by Perspectives"
    />
  );
};
