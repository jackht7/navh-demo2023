import { lazy } from 'react';

import Loader from '~/components/Loader/Loader';
import MainLayout from '~/components/MainLayout';

// const DashboardDefault = Loader(lazy(() => import('../pages/dashboard')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  // children: [
  //   {
  //     path: '/',
  //     element: <DashboardDefault />,
  //   },
  // ],
};

export default MainRoutes;
