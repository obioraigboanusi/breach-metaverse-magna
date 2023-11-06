import { useAuth } from '@hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function AuthGuard() {
    const { isLoggedIn } = useAuth();
    const { pathname } = useLocation();

    if (isLoggedIn && pathname.includes('/auth/')) {
        toast.info('You are already logged in.');
        return <Navigate to="/user/home" />;
    }

    if (!isLoggedIn && pathname.includes('/user/')) {
        toast.info('You are not logged in. Please login to continue.');
        return <Navigate to="/auth/login" />;
    }

    return <Outlet />;
}

export default AuthGuard;
