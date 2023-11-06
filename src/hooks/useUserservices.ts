import { getUserInterests, saveInterests } from '@services/user.service';
import { useMutation, useQuery } from 'react-query';

const useUserServices = {
    useSaveInterests: (...args: any) => useMutation(saveInterests, ...args),
    useGetUserInterests: (userId: number, ...args) => useQuery(['user.interests'], () => getUserInterests(userId), ...args),
};

export const { useSaveInterests, useGetUserInterests } = useUserServices;
