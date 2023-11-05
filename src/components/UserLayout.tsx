import { Outlet } from 'react-router-dom';
import Sidebar from './Dashboard.tsx/Sidebar';

function UserLayout() {
    return (
        <div className="grid grid-cols-[292px_1fr] min-h-screen">
            <div className="border border-gray-200">
                <Sidebar />
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
}

export default UserLayout;
