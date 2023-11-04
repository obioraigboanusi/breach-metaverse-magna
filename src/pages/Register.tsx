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

function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            password: '',
            email: '',
        },
    });
    const onSubmit = handleSubmit(async ({ email, password }) => {
        navigate('/auth/welcome');
    });
    return (
        <div>
            <Navbar />
            <section>
                <div className="container">
                    <div>
                        <div className="text-start ml-10">
                            <button className="flex gap-2 items-center" onClick={() => navigate(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M10 4L6 8L10 12" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Back
                            </button>
                        </div>
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
                                        disabled={!isValid}
                                        className="w-full btn bg-gray text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                                    >
                                        Continue
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
