import React from 'react';
import styles from './Table.module.css';

export interface Column<T> {
  key: string;
  header: string;
  render: (item: T) => React.ReactNode;
  width?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

export function Table<T extends { id: string }>({ data, columns, onRowClick }: TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {columns.map(column => (
            <th 
              key={column.key} 
              className={styles.th}
              style={{ width: column.width }}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map(item => (
          <tr 
            key={item.id} 
            className={`${styles.tr} ${onRowClick ? styles.clickable : ''}`}
            onClick={() => onRowClick?.(item)}
          >
            {columns.map(column => (
              <td key={column.key} className={styles.td}>
                {column.render(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
