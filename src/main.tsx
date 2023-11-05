import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Landing from './pages/Landing';
import Register from '@pages/Register';
import Login from '@pages/Login';
import Welcome from '@pages/Welcome';
import UserInterests from '@pages/UserInterests';
import Dashboard from '@pages/Home';
import UserLayout from '@components/UserLayout';

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
    {
        element: <UserLayout />,
        children: [
            {
                path: '/user/home',
                element: <Dashboard />,
            },
            {
                path: '/user/dashboard',
                element: <div>Dashboard</div>,
            },
            {
                path: '/user/publications',
                element: <div>Publications</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
