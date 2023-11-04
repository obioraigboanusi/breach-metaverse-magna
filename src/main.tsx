import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Landing from './pages/Landing';
import Register from '@pages/Register';
import Login from '@pages/Login';
import Welcome from '@pages/Welcome';
import UserInterests from '@pages/UserInterests';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/auth/login',
        element: <Login />,
    },
    {
        path: '/auth/register',
        element: <Register />,
    },
    {
        path: '/user/welcome',
        element: <Welcome />,
    },
    {
        path: '/user/interests',
        element: <UserInterests />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
