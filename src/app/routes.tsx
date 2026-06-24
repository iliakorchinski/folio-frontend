import { DashboardPage } from '@/pages/DashboardPage/DashboardPage';
import { EditPDFPage } from '@/pages/EditPDFPage/EditPDFPage';
import { SignInPage } from '@/pages/SignInPage/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage/SignUpPage';
import { ProtectedRoute } from './ProtectedRoute';

export const ROUTES = [
  {
    path: '/sign-in/*',
    element: <SignInPage />,
  },
  {
    path: '/sign-up/*',
    element: <SignUpPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute><DashboardPage /></ProtectedRoute>,
  },
  {
    path: '/editor/:id',
    element: <ProtectedRoute><EditPDFPage /></ProtectedRoute>,
  },
];
