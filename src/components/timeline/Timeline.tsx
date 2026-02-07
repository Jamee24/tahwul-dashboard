import React, { useState } from 'react';
import type { TimelinePhase } from '../../types';
import styles from './Timeline.module.css';

interface TimelineProps {
  phases: TimelinePhase[];
  title?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  position: number;
  status: 'completed' | 'future';
}

export const Timeline: React.FC<TimelineProps> = ({ phases, title = 'Project Timeline' }) => {
  const [selectedYear, setSelectedYear] = useState('2026');

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Extract all milestones from phases and calculate positions
  const events: TimelineEvent[] = [];
  
  // Collect all milestones with their dates
  phases.forEach(phase => {
    phase.milestones?.forEach(milestone => {
      events.push({
        date: formatDate(milestone.date),
        title: milestone.title,
        position: 0, // Will calculate below
        status: milestone.completed ? 'completed' : 'future'
      });
    });
  });

  // Sort events by date
  events.sort((a, b) => {
    const dateA = new Date(phases.flatMap(p => p.milestones || []).find(m => formatDate(m.date) === a.date)?.date || '');
    const dateB = new Date(phases.flatMap(p => p.milestones || []).find(m => formatDate(m.date) === b.date)?.date || '');
    return dateA.getTime() - dateB.getTime();
  });

  // Calculate position for each event
  if (events.length > 0) {
    const positions = [5, 20, 40, 60, 80, 95]; // Predefined positions for visual balance
    events.forEach((event, index) => {
      event.position = positions[index] || 95;
    });
  }

  // Find the last completed event to determine progress
  const lastCompletedIndex = events.map(e => e.status).lastIndexOf('completed');
  let progressPosition = 0;
  
  if (lastCompletedIndex >= 0) {
    const lastCompletedPosition = events[lastCompletedIndex].position;
    const nextEventIndex = lastCompletedIndex + 1;
    
    // If there's a next event, extend halfway to it; otherwise extend by 5%
    if (nextEventIndex < events.length) {
      const nextEventPosition = events[nextEventIndex].position;
      progressPosition = lastCompletedPosition + ((nextEventPosition - lastCompletedPosition) / 2);
    } else {
      // No next event, so extend by 5% or to the end
      progressPosition = Math.min(lastCompletedPosition + 5, 100);
    }
  }

  return (
    <div className={styles.timeline}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.dropdownWrapper}>
          <select 
            className={styles.yearDropdown} 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
          <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0155 4.76528L6.26552 8.51528C6.23069 8.55014 6.18934 8.5778 6.14381 8.59667C6.09829 8.61555 6.04949 8.62526 6.00021 8.62526C5.95093 8.62526 5.90213 8.61555 5.85661 8.59667C5.81108 8.5778 5.76972 8.55014 5.7349 8.51528L1.9849 4.76528C1.91453 4.69491 1.875 4.59948 1.875 4.49996C1.875 4.40045 1.91453 4.30502 1.9849 4.23465C2.05526 4.16429 2.1507 4.12476 2.25021 4.12476C2.34972 4.12476 2.44516 4.16429 2.51552 4.23465L6.00021 7.71981L9.4849 4.23465C9.51974 4.19981 9.5611 4.17217 9.60662 4.15332C9.65214 4.13446 9.70094 4.12476 9.75021 4.12476C9.79948 4.12476 9.84827 4.13446 9.8938 4.15332C9.93932 4.17217 9.98068 4.19981 10.0155 4.23465C10.0504 4.26949 10.078 4.31086 10.0969 4.35638C10.1157 4.4019 10.1254 4.45069 10.1254 4.49996C10.1254 4.54924 10.1157 4.59803 10.0969 4.64355C10.078 4.68907 10.0504 4.73044 10.0155 4.76528Z" fill="#17181C"/>
          </svg>
        </div>
      </div>
      
      <div className={styles.timelineContainer}>
        {/* Progress track */}
        <div className={styles.track}>
          <div 
            className={styles.progressLine} 
            style={{ width: `${progressPosition}%` }}
          />
        </div>
        
        {/* Milestone dots */}
        {events.map((event) => (
          <div 
            key={`${event.date}-${event.title}`}
            className={styles.milestone}
            style={{ left: `${event.position}%` }}
          >
            <div className={`${styles.dot} ${event.status === 'completed' ? styles.dotCompleted : styles.dotFuture}`} />
            <div className={styles.eventInfo}>
              <div className={styles.eventDate}>{event.date}</div>
              <div className={styles.eventTitle}>{event.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
