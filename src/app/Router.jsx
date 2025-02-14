import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/home/HomePage';
import SigninPage from '@pages/sign-in/SignInPage';
import RootLayout from '../components/layouts/RootLayout';

const publicRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
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
