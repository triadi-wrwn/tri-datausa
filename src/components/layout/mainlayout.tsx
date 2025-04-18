import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@/lib/providers/theme.provider';


const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hino-ui-theme">
      <div className="bg-slate-300 h-1 w-full absolute top-0" />
      <div className="w-full pb-6 pr-4 transition-all">
        <div className="min-h-[calc(100%-68px)] px-4 py-6 lg:px-8 rounded-xl bg-white">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
