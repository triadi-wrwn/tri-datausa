import { Navigate, Route, Routes } from "react-router";

import MainLayout from "@/components/layout/mainlayout";
import PageNotFound from "@/components/layout/notfound/page-not-found";
import Dashboard from "@/features/dashboard/dashboard";
import { PAGE_URLS } from "@/lib/constants/page-urls";

const MainRoutes = () => {
  const { DASHBOARD } = PAGE_URLS;

  return (
    <Routes>
      <Route path="/" element={<Navigate to={DASHBOARD} replace />} />
      <Route path={DASHBOARD} element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
