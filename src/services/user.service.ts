import api from '@services/api.service';
import apiEndpoints from '@config/apiEndpoints';

export async function saveInterests({ userId, data }: { userId: number; data: { interests: number[] } }): Promise<any> {
    return await api.post(apiEndpoints.USER_INTERESTS(userId), data);
}

export async function getUserInterests(userId: number): Promise<any> {
    return await api.get(apiEndpoints.USER_INTERESTS(userId));
}
