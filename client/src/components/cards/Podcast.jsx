import { useState } from "react";
import { FiHeadphones } from "react-icons/fi";
import { IoPlayCircle } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Podcast = ({ title, }) => {
    const [play, setPlay] = useState(false)
    return (
        <div className=" text-zinc-800 items-center flex justify-between music-card bg-white rounded-lg  p-3">
            <div className=" flex justify-center items-center gap-4">
                <div className="bg-emerald-100 px-4 py-3 rounded-full"><FiHeadphones size={24} /></div>
                <h3 className=" text-base font-medium ">{title}</h3>
            </div>
            <div className="play mx-1 cursor-pointer" >
                {play ? <IoPauseCircle size={30} className=" text-gray-800" onClick={() => setPlay(!play)} /> : <IoPlayCircle size={30} className=" text-gray-800" onClick={() => setPlay(!play)} />}
            </div>
        </div>
    );
};

export default Podcast;
