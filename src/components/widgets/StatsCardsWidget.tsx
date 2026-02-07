import React from 'react';
import { Tile } from '../cards';
import { dashboardData } from '../../data/dashboard';
import styles from './StatsCardsWidget.module.css';

export const StatsCardsWidget: React.FC = () => {
  return (
    <div className={styles.statsCards}>
      {dashboardData.tilesData.map((tile) => (
        <Tile
          key={tile.id}
          value={tile.value}
          description={tile.description}
          icon={tile.icon}
        />
      ))}
    </div>
  );
};