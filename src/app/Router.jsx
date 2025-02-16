import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import SigninPage from '@pages/sign-in/SignInPage';
import RootLayout from '../components/layouts/RootLayout';
import MyPage from '@/pages/MyPage';

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
        path: '/myPage',
        element: <MyPage />
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
