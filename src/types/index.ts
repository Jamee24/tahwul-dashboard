import React from 'react';

// Core data types for the Digital Transformation & Compliance Dashboard

export type StatusType = 
  | 'approved' 
  | 'pending' 
  | 'in-progress' 
  | 'under-review' 
  | 'completed' 
  | 'rejected'
  | 'not-started';

export type PerspectiveType = 
  | 'Financial' 
  | 'Customer' 
  | 'Internal Process' 
  | 'Learning & Growth';

export type PriorityLevel = 'high' | 'medium' | 'low';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  department?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  progress: number;
  startDate: string;
  endDate: string;
  priority: PriorityLevel;
  perspective: PerspectiveType;
  leaders: User[];
  objectives: string[];
  requirements: string[];
  scope: string[];
  relatedRegulations: string[];
}

export interface Evidence {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: StatusType;
  type: string;
  uploadedBy: User;
  uploadedAt: string;
  dueDate?: string;
  lastModified: string;
  reviewedBy?: User;
  reviewedAt?: string;
  fileUrl?: string;
  fileSize?: string;
  tags: string[];
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  mentions?: User[];
}

export interface PerspectiveProgress {
  perspective: PerspectiveType;
  completed: number;
  total: number;
  progress: number;
  leader?: User;
  metrics?: {
    label: string;
    value: number;
    total: number;
  }[];
}

export interface ChartDataPoint {
  month?: string;
  name?: string;
  value: number;
  label?: string;
  color?: string;
}

export interface ComplianceMetrics {
  overallScore: number;
  auditReadiness: number;
  documentationComplete: number;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface TileData {
  id: number;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

export interface Task {
  name: string;
  status: 'completed' | 'in-progress' | 'delayed' | 'not-started';
}

export interface Item {
  label: string;
  tasks: Task[];
}

export interface ProgressColumn {
  label: string;
  percentage: number;
  items: Item[];
}

export interface Leader extends User {
  performance: number;
  projectsLead: number;
  completionRate: number;
}

export interface TimelinePhase {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: StatusType;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  completed: boolean;
}

export interface Activity {
  id: number;
  text: string;
  time: string;
}

export interface DashboardData {
  perspectiveProgress: PerspectiveProgress[];
  complianceMetrics: ComplianceMetrics;
  performanceData: ChartDataPoint[];
  timeline: TimelinePhase[];
  topLeaders: Leader[];
  tilesData: TileData[];
  progressColumns: ProgressColumn[];
  activities: Activity[];
}

export interface EvidenceSummary {
  total: number;
  inProgress: number;
  underReview: number;
  completed: number;
}
