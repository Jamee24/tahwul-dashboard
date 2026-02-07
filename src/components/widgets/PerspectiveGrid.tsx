import React from 'react';
import type { PerspectiveProgress } from '../../types';
import { PerspectiveCard } from '../cards';
import styles from './PerspectiveGrid.module.css';

interface PerspectiveGridProps {
  perspectives: PerspectiveProgress[];
  title?: string;
}

export const PerspectiveGrid: React.FC<PerspectiveGridProps> = ({ 
  perspectives, 
  title = 'Progress Status by Perspectives' 
}) => {
  return (
    <div className={styles.progressGrid}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.grid}>
        {perspectives.map(perspective => (
          <PerspectiveCard 
            key={perspective.perspective} 
            data={perspective}
          />
        ))}
      </div>
    </div>
  );
};
