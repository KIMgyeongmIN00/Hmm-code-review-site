import RootLayout from '@/components/layouts/RootLayout';
import AuthContext from '@/contexts/auth/auth.context';
import { useContext } from 'react';
import { Navigate, Outlet, redirect, useLocation } from 'react-router-dom';

function ProtectedRouter() {
  const { auth } = useContext(AuthContext);
  const { pathname } = useLocation();

  const shouldRedirect = !['/', '/code/view'].some((path) => pathname.startsWith(path));

  if (!auth.isSignin && shouldRedirect) {
    return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
