import React, { useState } from 'react';
import styles from './PerspectiveDetails.module.css';
import { StatsCardsSection } from '../../components/perspective/StatsCardsSection';
import { OverviewTab } from '../../components/perspective/OverviewTab';
import { EvidenceTab } from '../../components/perspective/EvidenceTab';
import { LeadersSection } from '../../components/perspective/LeadersSection';

export const PerspectiveDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence'>('overview');

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backButton}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66666 8.00008H13.3333M2.66666 8.00008C2.66666 8.87875 5.99999 11.3334 5.99999 11.3334M2.66666 8.00008C2.66666 7.12141 5.99999 4.66675 5.99999 4.66675"
              stroke="#1D3557"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Digital Transformation Strategic Planning
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <div>
            <div className={styles.breadcrumb}>Strategy & Planning</div>
            <h1 className={styles.pageTitle}>
              Digital Transformation Strategic Planning
            </h1>
            <p className={styles.pageSubtitle}>
              Develop Comprehensive Strategic Plans For Digital Transformation
              Aligned With Organizational Goals
            </p>
          </div>
          <div className={styles.scoreCircle}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#10B981"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className={styles.scoreText}>100%</div>
          </div>
        </div>

        {/* Stats Cards Section */}
        <StatsCardsSection />

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "overview" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`${styles.tab} ${activeTab === "evidence" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("evidence")}
          >
            Evidence
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <>
            <OverviewTab />
            <LeadersSection />
          </>
        )}

        {/* Evidence Tab */}
        {activeTab === "evidence" && <EvidenceTab />}
      </div>
    </div>
  );
};

export default PerspectiveDetails;
