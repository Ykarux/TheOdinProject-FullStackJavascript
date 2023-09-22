import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Shop from './componenet/Shop.jsx';
import Cart from './componenet/Cart.jsx';

function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App/>,
		},
		{
			path: '/shop',
			element: <Shop/>
		},
		{
			path: '/cart',
			element: <Cart/>
		}
	])

	return <RouterProvider router={router}/>;
}

export default Router