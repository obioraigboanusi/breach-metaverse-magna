import { TOKEN_KEY } from '@config/constants';

class TokenStore {
    saveToken = (token: string) => {
        localStorage.setItem(TOKEN_KEY, token);
    };
    getToken = () => {
        return localStorage.getItem(TOKEN_KEY) || '';
    };

    deleteToken = () => {
        localStorage.removeItem(TOKEN_KEY);
    };
}

export default new TokenStore();
