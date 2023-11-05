import { useMemo, useState } from 'react';
import { AuthContext } from '../hooks/useAuth';

const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState<number>(JSON.parse(JSON.stringify(localStorage.getItem('userId'))));

    const value = useMemo(() => ({ userId, isLoggedIn: !!userId, setUserId: (id: number) => setUserId(id) }), [userId]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
