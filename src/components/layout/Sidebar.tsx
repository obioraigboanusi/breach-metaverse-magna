import Edit from '@assets/Edit';
import GridIcon from '@assets/GridIcon';
import HomeIcon from '@assets/HomeIcon';
import Logo from '@assets/Logo';
import MessageIcon from '@assets/MessageIcon';
import { NavLink } from 'react-router-dom';

const links = [
    {
        icon: (color?: string) => <HomeIcon color={color} />,
        name: 'Home',
        path: '/user/home',
    },
    {
        icon: (color?: string) => <GridIcon color={color} />,
        name: 'Dashboard',
        path: '/user/dashboard',
    },
    {
        icon: (color?: string) => <MessageIcon color={color} />,
        name: 'Publications',
        path: 'user/publications',
    },
];

function Sidebar() {
    return (
        <nav>
            <div className="py-[51px] px-[24px]">
                <div className="mb-[70px]">
                    <Logo />
                </div>
                <div className="mb-[40px]">
                    <button className="flex gap-2 items-center justify-center btn btn-primary w-full">
                        <Edit /> Start writing
                    </button>
                </div>
                <div>
                    <ul className="grid gap-[20px]">
                        {links.map(({ icon, name, path }) => (
                            <li key={name}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        ['flex items-center gap-2 px-[12px] py-[16px]', isActive && 'bg-[#FAF2FF] rounded-lg'].join(' ')
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {icon(isActive ? 'rgb(131, 17, 249)' : undefined)}
                                            <span className={isActive ? 'font-medium text-primary' : 'text-gray-500'}>{name}</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
