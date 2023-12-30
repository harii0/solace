import { BsArrowUpRightCircle } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const Result = ({ title, description, count, containerStyle, titleStyle, descriptionStyle, countStyle }) => {
    return (
        <div className={`${containerStyle}`}>
            <div className="flex items-center justify-around w-full gap-32">
                <h4 className={`text-lg font-medium ${titleStyle}`}>{title}</h4>
                <BsArrowUpRightCircle size={24} className="mx-3" />
            </div>
            <div className="flex items-center justify-around  w-full ">
                <p className={`text-gray-500 text-xs w-[15rem] leading-5 ${descriptionStyle}`}>{description}</p>
                <span className={`text-2xl font-semibold text-gray-800 w-[4rem] ${countStyle}`}>{count}</span>
            </div>
        </div>
    );
};

export default Result;
