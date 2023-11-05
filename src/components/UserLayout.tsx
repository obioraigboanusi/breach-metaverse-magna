import { Outlet } from 'react-router-dom';
import Sidebar from './Dashboard.tsx/Sidebar';

function UserLayout() {
    return (
        <div className="grid grid-cols-[292px_1fr] min-h-screen">
            <div className="border-r border-gray-200">
                <div className="sticky top-0">
                    <Sidebar />
                </div>
            </div>
            <div className="">
                <div className="relative">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserLayout;
