import React from 'react';
import styles from './Tile.module.css';

interface TileProps {
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ value, description, icon }) => {
  return (
    <div className={styles.tile}>
      <div className={styles.content}>
        <div className={styles.value}>{value}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.iconContainer}>
        {icon}
      </div>
    </div>
  );
};

export default Tile;
