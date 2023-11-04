import GoBack from '@components/GoBack';
import Navbar from '@components/Navbar';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

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
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            password: '',
            email: '',
        },
    });
    const onSubmit = handleSubmit(async ({ email, password }) => {});
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
                                    <button type="submit" className="w-full btn bg-gray text-white">
                                        Log in
                                    </button>
                                    <p className="mt-3 text-center">
                                        Don't have an account already?
                                        <Link to="/auth/register" className="underline ml-3">
                                            Join Breach
                                        </Link>
                                    </p>
                                </div>
                            </form>
                            {/* <div className="mt-[126px]">
                                <p className="text-sm">
                                    By signing up, you agree to Breach&apos;s{' '}
                                    <Link to="/terms" className="text-primary font-medium">
                                        Terms
                                    </Link>
                                    &
                                    <Link to="/privacy-policy" className="text-primary font-medium">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
