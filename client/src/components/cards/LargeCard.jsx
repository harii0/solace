
import { FiBookOpen } from "react-icons/fi";
const LargeCard = () => {
    return (
        <div className=" w-full h-[300px] bg-white rounded-[15px]  justify-center items-center flex gap-4 flex-col">
            <div className=" flex justify-start ml-6 gap-7 w-full">
                <div className="flex bg-emerald-100 w-16 h-16 rounded-full items-center justify-center"><FiBookOpen size={24} /></div>
                <h3 className="text-md font-medium">Understanding stress</h3>
            </div>
            <div className="text px-2 w-full">
                <p className="text-xs text-gray-500 px-5 leading-6">
                    Experience a transformative approach to stress management with our innovative app. We understand the critical importance of mental well-being, which is why our platform offers a comprehensive suite of tools and resources</p>
            </div>
        </div>
    )
}

export default LargeCard