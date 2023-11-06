import Logo from '@assets/Logo';
import { Link } from 'react-router-dom';

const links: { name: string; url: string }[] = [
    { name: 'About Breach', url: '/about' },
    { name: 'Terms', url: '/terms' },
    { name: 'Privacy Policy', url: '/privacy' },
];
function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-[20px] min-h-[104px] py-[50px] md:py-0">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <nav>
                            <ul className="flex flex-col md:flex-row gap-[40px] items-center">
                                <li>
                                    <a href="mailto:support@breach.example" className="text-primary">
                                        support@breach.example
                                    </a>
                                </li>
                                {links.map(({ name, url }) => (
                                    <li key={name}>
                                        <Link to={url}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
