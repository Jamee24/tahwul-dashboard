import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bordered?: boolean;
  noPadding?: boolean;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle,
  children,
  bordered = false,
  noPadding = false,
  className
}) => {
  const sectionClass = `${styles.section} ${bordered ? styles.bordered : ''} ${className || ''}`;
  const contentClass = noPadding ? styles.sectionContentNoPadding : styles.sectionContent;

  return (
    <div className={sectionClass}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      </div>
      <div className={contentClass}>{children}</div>
    </div>
  );
};
