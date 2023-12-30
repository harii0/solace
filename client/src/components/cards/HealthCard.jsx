import HelathImg from '../../assets/images/find.png'
const HealthCard = () => {
    return (
        <div className=" mx-2 w-[370px] h-[350px] bg-white rounded-[15px]  justify-center items-center flex gap-10 flex-col">
            <div className=" flex items-start w-full ">
                <h3 className="text-xl font-medium mx-6">Discover Mental<br />
                    Health Experts</h3>
            </div>
            <div className=" flex justify-center w-full">
                <img className='w-[200px]' src={HelathImg} alt="dd" />
            </div>
        </div>
    )
}

export default HealthCard