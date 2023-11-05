import { saveInterests } from '@services/user.service';
import { useMutation } from 'react-query';

const useUserServices = {
    useSaveInterests: (...args: any) => useMutation(saveInterests, ...args),
};

export const { useSaveInterests } = useUserServices;
