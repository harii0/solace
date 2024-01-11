import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg';
import { motion } from "framer-motion";
import { FiLogOut } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'
import { adminSidebarConfig, doctorSidebarConfig, userSidebarConfig } from './sidebarConfig'

//eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const userRole = useSelector((state) => state.user);
    const role = userRole?.user?.isAdmin ? 'admin' : userRole?.user?.isDoctor ? 'doctor' : 'user';
    const getSidebarConfig = () => {
        console.log(role)
        switch (role) {
            case 'admin':
                return adminSidebarConfig;
            case 'doctor':
                return doctorSidebarConfig;
            case 'user':
                return userSidebarConfig;
            default:
                return [];
        }
    };
    const sidebarConfig = getSidebarConfig();

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
        navigate('/login')
    }

    return (
        <div>
            <motion.div style={{ backgroundColor: ' #FAFAFC' }}
                variants={sidebarVariants}
                animate={isOpen ? "closed" : "visible"}
                className=" md:p-3 lg:px-1 text-secondary shadow-xl z-[999] w-[16rem] rounded-md mx-w-[16rem] h-screen md:relative overflow-hidden fixed">
                <div className="flex flex-col md:justify-between gap-28 md:gap-0 h-screen items-center  py-4">
                    <div className="logo flex flex-col">
                        <img src={logo} alt="" />

                    </div>

                    <ul className="cursor-pointer flex flex-col px-2 overflow-x-hidden gap-2 w-full">
                        {sidebarConfig.map((item) => (
                            <li key={item.path} className='px-1'>
                                <NavLink className="link" to={item.path}>
                                    {item.icon}
                                    {isOpen || <span>{item.label}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="logout pb-10 cursor-pointer">
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