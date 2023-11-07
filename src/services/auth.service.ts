import api from '@services/api.service';
import apiEndpoints from '@config/apiEndpoints';

export async function loginUser(data: AuthFormData): Promise<UserResponse> {
    return await api.post(apiEndpoints.LOGIN, data);
}
export async function registerUser(data: AuthFormData): Promise<UserResponse> {
    return await api.post(apiEndpoints.REGISTER, data);
}
