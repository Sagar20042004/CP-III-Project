import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Correct imports
import App from './App.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide the router configuration to the app */}
    <RouterProvider router={router} />
  </StrictMode>
);
