// import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navbar = ({ isOpen, setIsOpen }) => {
    const userData = useSelector((state) => state.user);
    const Img = {
        avtr: 'https://picsum.photos/200',
    }
    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const Navigate = useNavigate();
    return (
        <nav className="mx-1 my-1 bg-white rounded-lg  h-[3rem] sm:h-15 flex items-center py-1 shadow-sm">
            <div className="flex items-center  justify-between px-4 w-full py-1">
                <div className=" md:hidden">
                    <FaBars
                        size={23}
                        className="min-w-max cursor-pointer"
                        onClick={handleToggleSidebar}
                    />
                </div>
                <div className="hidden md:block flex-shrink-0 items-center justify-center">
                    <span className=" text-lg font-medium">
                        Welcome, {userData?.user?.username}
                    </span>
                </div>
                <div className=" flex justify-center items-center h-full  gap-7  rounded-md">
                    <div className="search relative">
                        <input
                            className=" text-xs relative rounded-lg border-none bg-slate-100 px-4 py-2 outline-none focus:border-none "
                            type="text"
                        />
                        <button
                            type="submit"
                            className=" absolute top-0 right-0 bottom-0 px-2 bg-transparent cursor-pointer"
                        >
                            <FiSearch size={16} className=" text-gray-500" />
                        </button>
                    </div>
                    <div className="items-center justify-center relative">
                        <span className=" absolute w-2 h-2 rounded bg-slate-800" />
                        <FiBell size={20} className="text-gray-500" />
                    </div>

                    <img
                        className="w-9 h-9  rounded-full cursor-pointer"
                        src={Img.avtr}
                        alt="Bordered avatar"
                        onClick={() => Navigate('/profile')}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
