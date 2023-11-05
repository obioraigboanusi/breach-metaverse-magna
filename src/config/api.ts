import tokenService from '@services/token.service';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://frontend-test-api.mvm-tech.xyz/api/',
});

api.interceptors.request.use((config) => {
    const token: string = tokenService.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use((response) => {
    return response.data;
});

export default api;
