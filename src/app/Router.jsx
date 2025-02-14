import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import SelectBox from '../components/commons/SelectBox';

const publicRoutes = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/select',
		element: <SelectBox />,
	},
];

const router = createBrowserRouter(publicRoutes);

function Routes() {
	return <RouterProvider router={router} />;
}

export default Routes;
