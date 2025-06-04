import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import PolicyPage from '../pages/PolicyPage';
import FaqPage from '../pages/FaqPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/faq',
		element: <FaqPage />,
	},
	{
		path: '/policy',
		element: <PolicyPage />,
	},
	{
		path: '/contact',
		element: <ContactPage />,
	},
]);
