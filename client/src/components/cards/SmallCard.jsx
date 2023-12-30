import Img from '../../assets/images/dumbel.png'
const SmallCard = () => {
    return (
        <div className="w-[280px] h-[350px] flex flex-col justify-center bg-emerald-100 rounded-[20px] ">
            <div className="flex h-1/2 justify-center items-center w-full">
                <img className='w-[200px]' src={Img} alt="" />
            </div>
            <div className="w-[232px] flex justify-start items-end h-1/2">
                <div className=" mx-4 mb-4 text-black text-xl font-medium font-['Poppins'] leading-[30px]">Building<br />confidence</div>
            </div>
        </div>
    )
}

export default SmallCard