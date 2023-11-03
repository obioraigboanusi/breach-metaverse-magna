import Logo from '@assets/Logo';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-[#FCFAFF]">
            <div className="container  py-[36px]">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex gap-[32px] items-center">
                        <Link to="/login" className="btn btn-outline">
                            Log in
                        </Link>
                        <Link to="register" className="btn btn-primary">
                            Join Breach
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
