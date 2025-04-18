import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from '@/components/layout/mainlayout';
import PageNotFound from '@/components/layout/notfound/page-not-found';
import DashboardSkeleton from '@/features/dashboard/components/dashboard-skeleton';
import { PAGE_URLS } from '@/lib/constants/page-urls';

const Dashboard = lazy(() => import('@/features/dashboard/dashboard'));

const MainRoutes = () => {
  const { DASHBOARD } = PAGE_URLS;

  return (
    <Routes>
      <Route path="/" element={<Navigate to={DASHBOARD} replace />} />
      <Route path={DASHBOARD} element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<DashboardSkeleton />}>
              <Dashboard />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
