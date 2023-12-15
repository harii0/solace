import { Grid } from 'react-ionicons'
import { Link } from 'react-router-dom'
import './style.module.css';
const Dashboard = () => {
    return (
        <div className="flex h-screen bg-black w-full">
            <div className=" sidebar w-1/5 h-screen bg-gray-200">
              
            </div>
            <div className="w-2/3 h-screen bg-gray-300">Main Content</div>
            <div className="w-1/4 h-screen bg-gray-400">Additional Column</div>
        </div>
    );
};

export default Dashboard;
