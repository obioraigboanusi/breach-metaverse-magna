import { getCategories, getPosts } from '@services/blog.service';
import { useQuery } from 'react-query';

const useBlogServices = {
    useGetCategories: (...args) => useQuery(['blog.categories'], getCategories, ...args),
    useGetPosts: (categoryId?: string, ...args) => useQuery(['blog.posts'], () => getPosts(categoryId), ...args),
};

export const { useGetCategories, useGetPosts } = useBlogServices;
