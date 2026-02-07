import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout';
import { Dashboard } from '../pages/Dashboard';
import { PerspectiveDetails } from '../pages/PerspectiveDetails';
import { ComingSoon } from '../pages/ComingSoon';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/perspectives" element={<PerspectiveDetails />} />
          <Route path="/reports" element={<ComingSoon />} />
          <Route path="/users" element={<ComingSoon />} />
          <Route path="/documents" element={<ComingSoon />} />
          <Route path="/tasks" element={<ComingSoon />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
