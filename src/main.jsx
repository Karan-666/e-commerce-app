import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// We import the new functions for creating our router.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import NotFound from './components/NotFound.jsx';

// We define an array of routes. Each object in this array represents one page.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // This is where we define our child routes. They will all be rendered inside the <Outlet> of the App component.
    children: [
      {
        path: '/',
        element: <ProductList />, // The main page will show the ProductList.
      },
      {
        path: '/product/:id', // This route is a child of the main path.
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '*', // This is the error page, It is also child of the layout. '*' mean any other route.
        element: <NotFound />,
      },
    ],
  },
]);

// We now use RouterProvider to render our application with the router we just created.
// This is the correct way to set up routing as per the assignment's instructions.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
