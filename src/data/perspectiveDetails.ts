import React from 'react';
import type { PerspectiveLeader, OverviewItem } from '../types';

export const perspectiveLeaders: PerspectiveLeader[] = [
  {
    id: 1,
    name: 'Ahmed Al-Ali',
    role: 'Strategy Perspective',
    avatar: '/avatars/ahmed.jpg'
  },
  {
    id: 2,
    name: 'Ahmed Al-Ali',
    role: 'Strategy Perspective',
    avatar: '/avatars/ahmed2.jpg'
  }
];

export const perspectiveOverviewItems: OverviewItem[] = [
  {
    label: 'Objective',
    value: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030'
  },
  {
    label: 'Implementation Requirements',
    value: [
      'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
      'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
      'B. Strategic Initiatives, Programs, And Performance Indicators.',
      'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
      'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.'
    ]
  },
  {
    label: 'Evidence Documents',
    value: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.'
  },
  {
    label: 'Related Regulations',
    value: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).'
  },
  {
    label: 'Scope',
    value: 'All Government Entities.'
  }
];

export const perspectiveStats = [
  {
    id: 'total-evidence',
    label: 'Total Evidence',
    value: 4,
    icon: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none' },
      React.createElement('path', {
        d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        stroke: '#EF4444',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    )
  },
  {
    id: 'under-review',
    label: 'Under Review Evidence',
    value: 3,
    icon: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
      React.createElement('path', {
        d: 'M20 13V10.657C20 9.839 20 9.431 19.848 9.063C19.696 8.696 19.407 8.406 18.828 7.828L14.092 3.092C13.593 2.593 13.344 2.344 13.034 2.196C12.9698 2.16518 12.9041 2.13781 12.837 2.114C12.514 2 12.161 2 11.456 2C8.211 2 6.588 2 5.489 2.886C5.26709 3.06494 5.06494 3.26709 4.886 3.489C4 4.59 4 6.211 4 9.456V14C4 17.771 4 19.657 5.172 20.828C6.235 21.892 7.886 21.99 11 22M13 2.5V3C13 5.828 13 7.243 13.879 8.121C14.757 9 16.172 9 19 9H19.5',
        stroke: '#DB1F26',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }),
      React.createElement('path', {
        d: 'M20 22.0001L17.853 19.8531M17.853 19.8531C18.4957 19.2101 18.8568 18.3382 18.857 17.4291C18.8571 16.6357 18.5821 15.8669 18.0788 15.2536C17.5756 14.6403 16.8752 14.2205 16.0971 14.0657C15.319 13.9109 14.5113 14.0307 13.8116 14.4046C13.112 14.7786 12.5636 15.3836 12.26 16.1166C11.9564 16.8496 11.9164 17.6651 12.1467 18.4243C12.3771 19.1835 12.8635 19.8393 13.5232 20.28C14.1829 20.7207 14.975 20.9191 15.7645 20.8412C16.554 20.7634 17.2921 20.4142 17.853 19.8531Z',
        stroke: '#DB1F26',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    )
  },
  {
    id: 'in-progress',
    label: 'In Progress Evidence',
    value: 2,
    icon: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
      React.createElement('path', {
        d: 'M20 14V10.657C20 9.839 20 9.431 19.848 9.063C19.696 8.696 19.407 8.406 18.828 7.828L14.092 3.092C13.593 2.593 13.344 2.344 13.034 2.196C12.9698 2.16518 12.9041 2.13781 12.837 2.114C12.514 2 12.161 2 11.456 2C8.211 2 6.588 2 5.489 2.886C5.26709 3.06494 5.06494 3.26709 4.886 3.489C4 4.59 4 6.211 4 9.456V14C4 17.771 4 19.657 5.172 20.828C6.344 21.999 8.229 22 12 22M13 2.5V3C13 5.828 13 7.243 13.879 8.121C14.757 9 16.172 9 19 9H19.5',
        stroke: '#DB1F26',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }),
      React.createElement('path', {
        d: 'M17 22C17.607 21.41 20 19.84 20 19C20 18.16 17.607 16.59 17 16M19 19H12',
        stroke: '#DB1F26',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    )
  },
  {
    id: 'completed',
    label: 'Completed Evidence',
    value: 1,
    icon: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
      React.createElement('path', {
        d: 'M9.727 2C6.467 2 4.835 2 3.703 2.798C3.38085 3.02392 3.0929 3.29503 2.848 3.603C2 4.669 2 6.203 2 9.273V11.818C2 14.781 2 16.263 2.469 17.446C3.223 19.349 4.817 20.849 6.839 21.559C8.096 22 9.669 22 12.819 22C14.617 22 15.517 22 16.235 21.748C17.39 21.342 18.301 20.485 18.732 19.398C19 18.722 19 17.875 19 16.182V15.5M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.588 6 19 5.5',
        stroke: '#DB1F26',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }),
      React.createElement('path', {
        d: 'M22 7C22 8.32608 21.4732 9.59785 20.5355 10.5355C19.5979 11.4732 18.3261 12 17 12C15.6739 12 14.4021 11.4732 13.4645 10.5355C12.5268 9.59785 12 8.32608 12 7C12 5.67392 12.5268 4.40215 13.4645 3.46447C14.4021 2.52678 15.6739 2 17 2C18.3261 2 19.5979 2.52678 20.5355 3.46447C21.4732 4.40215 22 5.67392 22 7Z',
        stroke: '#DB1F26',
        strokeWidth: '1.5',
        strokeLinecap: 'round'
      }),
      React.createElement('path', {
        d: 'M2 12C2 12.884 2.35115 13.7317 2.97621 14.3568C3.60127 14.9818 4.44903 15.333 5.333 15.333C5.999 15.333 6.784 15.217 7.431 15.39C7.71371 15.4661 7.97145 15.6151 8.17838 15.8223C8.38531 16.0294 8.53416 16.2872 8.61 16.57C8.783 17.217 8.667 18.002 8.667 18.668C8.66726 19.5518 9.01854 20.3993 9.64357 21.0241C10.2686 21.649 11.1162 22 12 22',
        stroke: '#DB1F26',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    )
  }
];
