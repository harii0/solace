import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg';
import { FiGrid } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { FiBookOpen } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";


//eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, setIsOpen }) => {

    let isTab = useMediaQuery({ query: '(max-width:768px)' });
    const sidebarVariants = isTab ? {
        closed: {
            x: -250,
            width: 0,
        },
        visible: {
            x: 0,
            width: "16rem",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
            },
        },
    } : {
        closed: {
            width: "4rem",
        },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
            },
        },
    };
    const IconsVariants = {
        closed: {
            rotate: 180,
        },
        visible: {
            rotate: 0,
        },
    };
    useEffect(() => {
        if (isTab) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }, [isTab, setIsOpen]);

    const Logout = () => {
        localStorage.removeItem('token')
        sessionStorage.removeItem('user')
        window.location.href = '/login'
    }
  
    return (
        <div>
            <motion.div style={{ backgroundColor: ' #FAFAFC' }}
                variants={sidebarVariants}
                animate={isOpen ? "closed" : "visible"}
                className=" md:p-4 lg:p-1 text-secondary shadow-xl z-[999] w-[16rem] rounded-md mx-w-[16rem] h-screen md:relative overflow-hidden fixed">
                <div className="flex flex-col justify-between h-full items-center  py-4">
                    <div className="logo flex flex-col">
                        <img src={logo} alt="" />

                    </div>

                    <ul className=' cursor-pointer whitespace-pre px-1 flex flex-col py-2 overflow-x-hidden gap-2 w-full'  >
                        <li>
                            <NavLink className='link ' to='/dashboard'>
                                <FiGrid size={20} className='min-w-max px-1' />
                                {isOpen || <span className='ml-1'>Dashboard</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/resource'>
                                <FiBookOpen size={20} className='min-w-max px-1' />
                                {isOpen || <span className='ml-1'>Resources</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/chat'>
                                <FiMessageSquare size={20} className='min-w-max px-1' />
                                {isOpen || <span className='ml-1'>Chat</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='link ' to='/doctor'>
                                <FiUsers size={20} className='min-w-max px-1' />
                                {isOpen || <span className='ml-1'>psychiatrist</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/profile'>
                                <FiUser size={20} className='min-w-max px-1' />
                                {isOpen || <span className='ml-1'>Profile</span>}
                            </NavLink>
                        </li>
                    </ul>
                    <div className="logout pb-7 cursor-pointer">
                        <FiLogOut size={20} className='min-w-max' onClick={Logout} />
                    </div>
                </div>
                {/* sidebar-open/close btn using framer*/}
                <motion.div
                    variants={IconsVariants}
                    animate={isOpen ? "closed" : "visible"}
                    className='absolute w-fit h-fit z-50 right-0 top-10 p-5'>
                    <IoIosArrowBack

                        width={20}
                        height={20}
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-xl cursor-pointer  p-1  shadow-2xl'
                    />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Sidebar