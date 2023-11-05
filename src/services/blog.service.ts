import api from '@config/api';
import apiEndpoints from '@config/apiEndponts';

export async function getPosts(categoryId?: string): Promise<any> {
    return await api.get(apiEndpoints.POSTS, {
        params: { categoryId },
    });
}

export async function getCategories(): Promise<any> {
    return await api.get(apiEndpoints.CATEGORIES);
}
