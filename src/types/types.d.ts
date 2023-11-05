interface ICategory {
    id: number;
    name: string;
    icon: string;
}

interface UserResponse {
    userId: number;
    token: string;
}

interface AuthState {
    userId: number | undefined;
    isLoggedIn: boolean;
    setUserId: (arg: number) => void;
}

interface AuthFormData {
    password: string;
    email: string;
}
