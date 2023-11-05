import { loginUser, registerUser } from '@services/auth.service';
import { useMutation } from 'react-query';

const useServices = {
    useUserLogin: (...args: any) => useMutation(loginUser, ...args),
    useUserRegister: (...args: any) => useMutation(registerUser, ...args),
};

export const { useUserLogin, useUserRegister } = useServices;
