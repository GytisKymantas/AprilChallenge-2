import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({
  permission,
  redirectPath = '/',
  children,
}: any) => {
  console.log(permission, 'oerm');
  if (!permission) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
