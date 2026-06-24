import type { ReactElement } from 'react';
import { DashboardPage } from '@/pages/DashboardPage/DashboardPage';

interface RouteConfig {
  path: string;
  element: ReactElement;
}

export const ROUTES: RouteConfig[] = [
  { path: '/', element: <DashboardPage /> },
];
