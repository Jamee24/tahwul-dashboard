import React from 'react';
import { Timeline } from '../timeline';
import { dashboardData } from '../../data/dashboard';

export const ProjectTimeline: React.FC = () => {
  return <Timeline phases={dashboardData.timeline} title="Project Timeline" />;
};

export default ProjectTimeline;
