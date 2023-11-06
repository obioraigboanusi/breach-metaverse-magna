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

interface IPost {
    id: number;
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
    category: {
        id: number;
        name: string;
        icon: string;
    };
    series: {
        id: number;
        name: string;
    };
    createdAt: string;
}
