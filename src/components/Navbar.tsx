import Logo from '@assets/Logo';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const { pathname } = useLocation();
    const isAuthPath = ['/auth/', '/user/'].some((item) => pathname.includes(item));

    return (
        <nav className={isAuthPath ? 'bg-white' : 'bg-[#FCFAFF]'}>
            <div className="container  py-[36px]">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    {!isAuthPath && (
                        <div className="flex gap-[32px] items-center">
                            <Link to="/auth/login" className="btn btn-outline">
                                Log in
                            </Link>
                            <Link to="/auth/register" className="btn btn-primary">
                                Join Breach
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
