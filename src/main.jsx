import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// We import the new functions for creating our router.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// We define an array of routes. Each object in this array represents one page.
const router = createBrowserRouter([
  // This is our main home page. The path is '/' and it will show our App component.
  {
    path: '/',
    element: <App />,
  },
]);

// We now use RouterProvider to render our application with the router we just created.
// This is the correct way to set up routing as per the assignment's instructions.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
