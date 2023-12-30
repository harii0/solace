/* eslint-disable react/prop-types */
import { useState } from 'react';
import Navbar from './sidebar/Navbar';
import Sidebar from './sidebar/Sidebar';

const Layout = ({ children, showSidebar = true, showNavbar = true }) => {
    const [isOpen, setIsOpen] = useState(true); // Initialize the state in Layout

    return (
        <div className="flex mc w-full h-screen overflow-hidden">
            {showSidebar && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
            <div className="flex flex-col flex-1 overflow-hidden lg:ml-1 md:ml-0">
                {showNavbar && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}
                <main className="max-w-8xl ml-1 h-full overflow-y-scroll">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
