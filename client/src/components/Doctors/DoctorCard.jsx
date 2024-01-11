/* eslint-disable react/prop-types */


const DoctorCard = ({ psychiatrist, onBookAppointment, }) => {
    const { avatar, name, specialization, rating, description } = psychiatrist;

    return (
        <div className="bg-white md:w-[290px] w-full flex rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 ease-in-out ">
            <div className="p-5 ">
                <div className="flex items-center justify-center flex-col gap-5">
                    <img src={avatar} alt={name} className="w-full h-[140px] rounded-md" />
                    <div>
                        <span className="text-lg font-semibold">{name}</span>
                        <p className="text-gray-500 text-sm">{specialization}</p>
                        <p className="text-xs text-gray-400">{description}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between ">
                    <div>
                        <span className="text-yellow-500 mr-1">&#9733;</span>
                        <span className="text-gray-600">{rating.toFixed(1)}</span>
                    </div>
                    <button
                        onClick={() => onBookAppointment()}
                        className="bg-black text-white text-xs px-4 py-2 rounded-md hover:bg-zinc-800 focus:outline-none focus:shadow-outline-blue "
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
