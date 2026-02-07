import React from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 
  | 'approved' 
  | 'pending' 
  | 'in-progress' 
  | 'under-review' 
  | 'completed' 
  | 'rejected'
  | 'not-started'
  | 'high'
  | 'medium'
  | 'low';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  const className = variant.replace('-', '');
  
  return (
    <span className={`${styles.badge} ${styles[className as keyof typeof styles]}`}>
      {children}
    </span>
  );
};
