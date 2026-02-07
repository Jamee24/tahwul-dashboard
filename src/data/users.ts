import type { User } from '../types';

export const users: User[] = [
  {
    id: 'u1',
    name: 'Mohamed',
    email: 'mohamed@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed',
    role: 'Chief Digital Officer',
    department: 'Digital Transformation'
  },
  {
    id: 'u2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    role: 'Compliance Manager',
    department: 'Compliance'
  },
  {
    id: 'u3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    role: 'Project Lead',
    department: 'Operations'
  },
  {
    id: 'u4',
    name: 'David Kim',
    email: 'david.kim@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    role: 'Senior Auditor',
    department: 'Internal Audit'
  },
  {
    id: 'u5',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    role: 'Strategy Director',
    department: 'Strategic Planning'
  },
  {
    id: 'u6',
    name: 'James Wilson',
    email: 'james.wilson@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    role: 'Technical Lead',
    department: 'IT Infrastructure'
  }
];

export const getCurrentUser = (): User => users[0];
