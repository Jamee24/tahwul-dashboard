import React from 'react';
import styles from './StepIndicator.module.css';

interface Task {
  name: string;
  status: 'completed' | 'in-progress' | 'delayed' | 'not-started';
}

interface StepIndicatorProps {
  label: string;
  tasks: Task[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ label, tasks }) => {
  return (
    <div className={styles.stepIndicator}>
      <span className={styles.label}>{label}</span>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <div
            key={task.name}
            className={`${styles.taskCircle} ${styles[task.status]}`}
          >
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
