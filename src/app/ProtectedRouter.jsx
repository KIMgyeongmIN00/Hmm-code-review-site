import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ProtectedRouter() {
  const { pathname } = useLocation();
  const token = localStorage.getItem('sb-lcygdiufbrqstxmyqxmz-auth-token');

  if (!token) {
    return <Navigate to="/sign-in" replace state={{ redirectedFrom: pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
