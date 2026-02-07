import React from 'react';
import styles from './CircularProgress.module.css';

interface CircularProgressProps {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showValue?: boolean;
  label?: string;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 120,
  strokeWidth = 8,
  color = '#3B82F6',
  backgroundColor = '#E5E7EB',
  showValue = true,
  label,
  className
}) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div className={`${styles.circularProgress} ${className || ''}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.svg}>
        {/* Background circle */}
        <circle
          className={styles.backgroundCircle}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          className={styles.progressCircle}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {(showValue || label) && (
        <div className={styles.content}>
          {showValue && (
            <div className={styles.value}>{Math.round(normalizedValue)}%</div>
          )}
          {label && <div className={styles.label}>{label}</div>}
        </div>
      )}
    </div>
  );
};
