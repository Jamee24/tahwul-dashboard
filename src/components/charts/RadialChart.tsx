import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './RadialChart.module.css';

interface RadialChartProps {
  value: number;
  title: string;
  color?: string;
}

export const RadialChart: React.FC<RadialChartProps> = ({ 
  value, 
  title, 
  color = '#3B82F6' 
}) => {
  const data = [
    { name: 'completed', value: value },
    { name: 'remaining', value: 100 - value }
  ];

  const COLORS = [color, '#E5E7EB'];

  return (
    <div className={styles.radialCard}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.scoreLabel}>
        <div className={styles.scoreValue}>{value}%</div>
        <div className={styles.scoreText}>Score</div>
      </div>
    </div>
  );
};
