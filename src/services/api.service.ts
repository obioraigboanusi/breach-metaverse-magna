import { BASE_URL } from '@config/constants';
import tokenService from '@services/token.service';
import axios from 'axios';

const api = axios.create({
    baseURL: BASE_URL,
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
