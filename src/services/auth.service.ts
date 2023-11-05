import api from '@config/api';
import apiEndpoints from '@config/apiEndpoints';

export async function loginUser(data: { password: string; email: string }) {
    return await api.post(apiEndpoints.LOGIN, data);
}
export async function registerUser(data: { password: string; email: string }) {
    return await api.post(apiEndpoints.REGISTER, data);
}
