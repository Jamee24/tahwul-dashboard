import React from 'react';
import styles from './EvidenceTab.module.css';
import { evidence } from '../../data/evidence';
import { Table } from '../tables';
import type { Column } from '../tables';
import { Badge } from '../cards';
import { RecentActivitiesSection } from '../dashboard';

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
};

const evidenceColumns: Column<any>[] = [
  {
    key: "id",
    header: "Document Number",
    render: (item) => `DOC-${item.id}`,
    width: "15%",
  },
  {
    key: "title",
    header: "Document Name",
    render: (item) => item.title,
    width: "30%",
  },
  {
    key: "uploadedBy",
    header: "Owner",
    render: (item) => item.uploadedBy.name,
    width: "15%",
  },
  {
    key: "uploadedAt",
    header: "Date",
    render: (item) =>
      new Date(item.uploadedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    width: "15%",
  },
  {
    key: "dueDate",
    header: "Due Date",
    render: (item) =>
      item.dueDate
        ? new Date(item.dueDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "—",
    width: "15%",
  },
  {
    key: "status",
    header: "Status",
    render: (item) => <Badge variant={item.status}>{item.status}</Badge>,
    width: "10%",
  },
];

export const EvidenceTab: React.FC = () => {
  const allComments = evidence
    .flatMap(e => e.comments.map(c => ({ ...c, evidenceTitle: e.title })))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className={styles.evidenceDetails}>
      <div className={styles.mainGrid}>
        <div className={styles.mainContent}>
          <div className={styles.tableSection}>
            <Table data={evidence} columns={evidenceColumns} />
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.commentsSection}>
            <h3 className={styles.sectionTitle}>Comments</h3>
            <div className={styles.commentsList}>
              {allComments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                  <div className={styles.commentAvatar}>
                    <img
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                      <span className={styles.commentAuthor}>
                        {comment.author.name}
                      </span>
                      <span className={styles.commentTime}>
                        {formatTime(comment.createdAt)}
                      </span>
                    </div>
                    <div className={styles.commentText}>{comment.content}</div>
                    <div className={styles.commentEvidence}>
                      On "{comment.evidenceTitle}"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.activitiesWidget}>
            <RecentActivitiesSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceTab;
