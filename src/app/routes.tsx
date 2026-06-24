import type { ReactElement } from 'react';
import { DashboardPage } from '@/pages/DashboardPage/DashboardPage';
import { EditPDFPage } from '@/pages/EditPDFPage/EditPDFPage';

interface RouteConfig {
  path: string;
  element: ReactElement;
}

export const ROUTES: RouteConfig[] = [
  { path: '/', element: <DashboardPage /> },
  { path: '/editor/:id', element: <EditPDFPage /> },
];
