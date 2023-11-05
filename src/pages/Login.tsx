import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import GoBack from '@components/GoBack';
import Navbar from '@components/Navbar';

import { useUserLogin } from '@hooks/useAuthServices';

const loginSchema = yup
    .object()
    .shape({
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    })
    .required();

function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            password: '',
            email: '',
        },
    });
    const { isLoading, mutateAsync } = useUserLogin();

    const onSubmit = handleSubmit(async ({ email, password }) => {
        try {
            const res = await mutateAsync({ email, password });
            localStorage.setItem('token', res.token);
            localStorage.setItem('userId', JSON.stringify(res.userId));
            toast.success('Logged in successfully');
            navigate('/user/home');
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Failed to login. Please try again.');
        }
    });

    return (
        <div>
            <Navbar />
            <section>
                <div className="container">
                    <div>
                        <GoBack />
                        <div className="max-w-[448px] mx-auto">
                            <header className="text-center">
                                <h1 className="text-3xl mb-4 font-semibold">Welcome Back</h1>
                                <p className="mb-4">Log in to continue on Breach</p>
                            </header>
                            <form onSubmit={onSubmit} className="grid gap-[38px]">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 h-[48px]"
                                        placeholder="Enter email"
                                        {...register('email')}
                                    />
                                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter password"
                                        className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 h-[48px]"
                                        {...register('password')}
                                    />
                                    {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full btn bg-gray text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                                        disabled={!isValid || isLoading || isSubmitting}
                                    >
                                        {isLoading || isSubmitting ? 'Processing...' : '  Log in'}
                                    </button>
                                    <p className="mt-3 text-center">
                                        Don't have an account already?
                                        <Link to="/auth/register" className="underline ml-3">
                                            Join Breach
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
