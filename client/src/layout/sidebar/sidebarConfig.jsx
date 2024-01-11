// SidebarConfig.js
import {
  FiGrid,
  FiBookOpen,
  FiMessageSquare,
  FiUser,
  FiUsers,
} from "react-icons/fi";
const adminSidebarConfig = [
  { path: "/dashboard", icon: <FiGrid size={20} />, label: "Dashboard" },
  { path: "/resource", icon: <FiBookOpen size={20} />, label: "Resources" },
  { path: "/doctor", icon: <FiUsers size={20} />, label: "Psychiatrist" },
  { path: "/profile", icon: <FiUser size={20} />, label: "Profile" },
];

const doctorSidebarConfig = [
  { path: "/dashboard", icon: <FiGrid size={20} />, label: "Dashboard" },
  { path: "/resource", icon: <FiBookOpen size={20} />, label: "Resources" },
  { path: "/chat", icon: <FiMessageSquare size={20} />, label: "Chat" },
  { path: "/profile", icon: <FiUser size={20} />, label: "Profile" },
];

const userSidebarConfig = [
  { path: "/dashboard", icon: <FiGrid size={20} />, label: "Dashboard" },
  { path: "/resource", icon: <FiBookOpen size={20} />, label: "Resources" },
  { path: "/chat", icon: <FiMessageSquare size={20} />, label: "Chat" },
  { path: "/doctor", icon: <FiUsers size={20} />, label: "Psychiatrist" },
  { path: "/profile", icon: <FiUser size={20} />, label: "Profile" },
];

export { adminSidebarConfig, doctorSidebarConfig, userSidebarConfig };
