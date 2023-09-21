import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Pokemon from './Pokemon.jsx';
import Error from './Error';

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App/>,
			errorElement: <Error/>,
		},
		{
			path: 'pokemon',
			element: <Pokemon/>,
		},
		{
			path: 'profile/:name',
			element: <Profile/>,
		},
	]);

	return <RouterProvider router={router}/>;
};

export default Router;