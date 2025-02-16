import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import HomePage from '@pages/HomePage';
import SigninPage from '@pages/sign-in/SignInPage';
import WritePage from '@pages/write/WritePage';
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
        path: '/write',
        element: <WritePage />
      },
      {
        path: '/my-page',
        element: <MyPage />
      }
    ]
  },
  {
    path: '/sign-in',
    element: <SigninPage />
  }
];

const router = createBrowserRouter(publicRoutes);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
