import React from 'react';
import { LeaderBoard } from './LeaderBoard';
import { dashboardData } from '../../data/dashboard';

export const TopLeadersWidget: React.FC = () => {
  return (
    <LeaderBoard 
      leaders={dashboardData.topLeaders}
      title="Top Performing Leaders"
    />
  );
};
