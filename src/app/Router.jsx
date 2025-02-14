import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import ViewPage from '@pages/view/ViewPage';
import SigninPage from '@pages/signinPage';

const publicRoutes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: `/code/view/:id`,
    element: <ViewPage />
  },
  {
    path: '/signin',
    element: <SigninPage />
  }
];

const router = createBrowserRouter(publicRoutes);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
