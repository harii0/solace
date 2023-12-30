import { GoTrophy } from "react-icons/go";

const Achievements = () => {
    return (
        <div className=" bg-white flex items-center justify-around w-full rounded-md gap-10">

            <div className="flex flex-col py-1 justify-center">
                <span className="text-2xl font-semibold py-1">12</span>
                <p className="text-sm text-gray-500 ">Total badges collected</p>
            </div>
            <div className="flex items-center h-full">
                <GoTrophy size={28} />
            </div>
        </div>
    );
};

export default Achievements;
