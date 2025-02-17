import AuthContext from '@contexts/auth/auth.context';
import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ProtectedRouter() {
  const { auth } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (!auth.isSignin) {
    return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
