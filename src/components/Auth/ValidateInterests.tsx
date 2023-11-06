import { useAuth } from '@hooks/useAuth';
import { useGetUserInterests } from '@hooks/useUserservices';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ValidateInterests() {
    const { userId } = useAuth();
    const { pathname, state } = useLocation();
    console.log(pathname, state?.from);
    const shouldValidate = state?.from === '/auth/login' && pathname === '/user/home';

    const { data: interests, isLoading } = useGetUserInterests(userId, {
        enabled: shouldValidate,
    });

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (shouldValidate && !(interests.length > 0)) {
        return <Navigate to="/user/interests" />;
    }

    return <Outlet />;
}

export default ValidateInterests;
