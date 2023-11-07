import api from '@services/api.service';
import apiEndpoints from '@config/apiEndpoints';

export async function getPosts(categoryId?: string): Promise<any> {
    return await api.get(apiEndpoints.POSTS, {
        params: { ...(categoryId ? { categoryId } : {}) },
    });
}

export async function getCategories(): Promise<any> {
    return await api.get(apiEndpoints.CATEGORIES);
}
