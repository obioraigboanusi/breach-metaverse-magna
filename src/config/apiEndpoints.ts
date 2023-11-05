const apiEndpoints = {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    CATEGORIES: 'blog/categories',
    POSTS: 'blog/posts',
    USER_INTERESTS: (userId: number) => `users/${userId}/interests`,
};

export default apiEndpoints;
