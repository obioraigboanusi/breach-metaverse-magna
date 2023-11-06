import GoBack from '@components/GoBack';
import Navbar from '@components/Navbar';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserRegister } from '@hooks/useAuthServices';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import tokenService from '@services/token.service';
import { USER_ID_KEY } from '@config/constants';

const loginSchema = yup
    .object()
    .shape({
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    })
    .required();

function Register() {
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

    const { isLoading, mutateAsync } = useUserRegister();

    const onSubmit = handleSubmit(async ({ email, password }) => {
        try {
            const res = await mutateAsync({ email, password });
            tokenService.saveToken(res.token);
            localStorage.setItem(USER_ID_KEY, JSON.stringify(res.userId));
            toast.success('Registered successfully');
            navigate('/user/welcome');
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Failed to sign up. Please try again.');
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
                                <h1 className="text-3xl mb-4 font-semibold">Join Breach</h1>
                                <p className="mb-4">Break through the noise and discover content that matters to you in under 3 minutes.</p>
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
                                        disabled={!isValid || isLoading || isSubmitting}
                                        className="w-full btn bg-gray text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                                    >
                                        {isLoading || isSubmitting ? 'Processing...' : 'Continue'}
                                    </button>
                                    <p className="mt-3 text-center">
                                        Already have an account?
                                        <Link to="/auth/login" className="underline ml-3">
                                            Log in
                                        </Link>
                                    </p>
                                </div>
                            </form>
                            <div className="mt-[126px]">
                                <p className="text-sm">
                                    By signing up, you agree to Breach&apos;s{' '}
                                    <Link to="/terms" className="text-primary font-medium">
                                        Terms
                                    </Link>
                                    &{' '}
                                    <Link to="/privacy-policy" className="text-primary font-medium">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
