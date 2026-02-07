import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  subtitle,
  headerAction,
  children, 
  footer,
  className,
  noPadding = false
}) => {
  const hasHeader = title || subtitle || headerAction;

  return (
    <div className={`${styles.card} ${className || ''}`}>
      {hasHeader && (
        <div className={styles.cardHeader}>
          <div className={styles.headerContent}>
            {title && <h3 className={styles.cardTitle}>{title}</h3>}
            {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
          </div>
          {headerAction && (
            <div className={styles.headerAction}>{headerAction}</div>
          )}
        </div>
      )}
      <div className={noPadding ? styles.cardContentNoPadding : styles.cardContent}>
        {children}
      </div>
      {footer && (
        <div className={styles.cardFooter}>{footer}</div>
      )}
    </div>
  );
};
