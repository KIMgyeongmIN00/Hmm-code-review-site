import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import ViewPage from '@pages/view/ViewPage';

const publicRoutes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: `/code/view/:id`,
    element: <ViewPage />
  }
];

const router = createBrowserRouter(publicRoutes);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
