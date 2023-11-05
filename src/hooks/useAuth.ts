import { createContext, useContext } from 'react';

export const AuthContext = createContext<any>({ userId: undefined, isLoggedIn: false });

export const useAuth = () => useContext(AuthContext);
