import React from 'react';
import styles from './OverviewTab.module.css';
import { perspectiveOverviewItems } from '../../data/perspectiveDetails';

export const OverviewTab: React.FC = () => {
  return (
    <div className={styles.contentTable}>
      {perspectiveOverviewItems.map((item) => (
        <div key={item.label} className={styles.tableRow}>
          <div className={styles.tableLabel}>{item.label}</div>
          <div className={styles.tableValue}>
            {typeof item.value === 'string' ? (
              <p className={styles.tableText}>{item.value}</p>
            ) : (
              item.value.map((text, idx) => (
                <p key={`${item.label}-${idx}`} className={styles.tableText}>
                  {text}
                </p>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewTab;
