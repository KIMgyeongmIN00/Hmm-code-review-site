import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import ViewPage from '@pages/view/ViewPage';
import SigninPage from '@pages/sign-in/SignInPage';
import RootLayout from '@layouts/RootLayout';

const publicRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/code/view/:id',
        element: <ViewPage />
      }
    ]
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
