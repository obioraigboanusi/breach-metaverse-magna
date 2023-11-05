import api from '@config/api';
import apiEndpoints from '@config/apiEndpoints';

export async function saveInterests({ userId, data }: { userId: number; data: { interests: number[] } }): Promise<any> {
    return await api.post(apiEndpoints.USER_INTERESTS(userId), data);
}
