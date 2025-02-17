import RootLayout from '@/components/layouts/RootLayout';
import AuthContext from '@/contexts/auth/auth.context';
import { useContext } from 'react';
import { Navigate, Outlet, redirect, useLocation } from 'react-router-dom';

function ProtectedRouter() {
  const { auth } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (!auth.isSignin) {
    return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
  }

  return <RootLayout />;
}

export default ProtectedRouter;
