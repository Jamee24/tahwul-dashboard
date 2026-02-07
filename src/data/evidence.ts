import type { Evidence, Comment } from '../types';
import { users } from './users';

const sampleComments: Comment[] = [
  {
    id: 'c1',
    author: users[1],
    content: 'Please ensure all compliance checkpoints are documented according to the latest standards.',
    createdAt: '2026-02-05T10:30:00Z'
  },
  {
    id: 'c2',
    author: users[3],
    content: 'Audit review scheduled for next week. All documentation looks good so far.',
    createdAt: '2026-02-04T14:45:00Z'
  },
  {
    id: 'c3',
    author: users[2],
    content: 'Updated the risk assessment matrix. @Michael Chen please review.',
    createdAt: '2026-02-03T09:15:00Z',
    mentions: [users[1]]
  }
];

export const evidence: Evidence[] = [
  {
    id: 'e1',
    projectId: 'p1',
    title: 'Digital_Transformation_Plan.pdf',
    description: 'Comprehensive data protection impact assessment for customer platform implementation',
    status: 'approved',
    type: 'Assessment Report',
    uploadedBy: users[2],
    uploadedAt: '2026-01-28T10:30:00Z',
    lastModified: '2026-02-01T14:20:00Z',
    reviewedBy: users[1],
    reviewedAt: '2026-02-01T14:20:00Z',
    fileUrl: '/documents/gdpr-impact-assessment.pdf',
    fileSize: '2.4 MB',
    tags: ['GDPR', 'Privacy', 'Compliance', 'Customer Data'],
    comments: [sampleComments[0]]
  },
  {
    id: 'e2',
    projectId: 'p1',
    title: 'KPI_Framework.xlsx',
    description: 'Security assessment of all customer-facing APIs and integration points',
    status: 'under-review',
    type: 'Audit Report',
    uploadedBy: users[5],
    uploadedAt: '2026-02-03T09:15:00Z',
    lastModified: '2026-02-04T16:30:00Z',
    fileUrl: '/documents/api-security-audit.pdf',
    fileSize: '1.8 MB',
    tags: ['Security', 'API', 'Technical', 'ISO 27001'],
    comments: [sampleComments[1], sampleComments[2]]
  },
  {
    id: 'e3',
    projectId: 'p1',
    title: 'Roadmap_Version1.docx',
    description: 'UAT results from pilot group testing mobile app features',
    status: 'pending',
    type: 'Test Report',
    uploadedBy: users[2],
    uploadedAt: '2026-02-05T11:00:00Z',
    lastModified: '2026-02-05T11:00:00Z',
    fileUrl: '/documents/uat-results.xlsx',
    fileSize: '3.2 MB',
    tags: ['Testing', 'UAT', 'Mobile App'],
    comments: []
  }
];

export const getEvidenceByProjectId = (projectId: string): Evidence[] => {
  return evidence.filter(e => e.projectId === projectId);
};

export const getEvidenceById = (id: string): Evidence | undefined => {
  return evidence.find(e => e.id === id);
};
