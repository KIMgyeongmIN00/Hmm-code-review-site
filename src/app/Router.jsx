import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import HomePage from '@pages/HomePage';
import ViewPage from '@pages/view/ViewPage';
import WritePage from '@pages/write/WritePage';
import MyPage from '@/pages/MyPage';
import SignInPage from '@pages/sign-in/SignInPage';
import SignUpPage from '@pages/sign-in/SignInPage';

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
    element: <SignInPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  }
];

const router = createBrowserRouter(publicRoutes);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
