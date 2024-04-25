import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  permission: boolean;
  redirectPath?: string;
  children: ReactNode;
}

export const ProtectedRoute = ({
  permission,
  redirectPath = '/',
  children,
}: ProtectedRouteProps) => {
  if (!permission) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
