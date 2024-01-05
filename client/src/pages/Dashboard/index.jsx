//icons
import Achievements from '../../components/cards/Achivements'

import LargeCard from '../../components/cards/LargeCard'
import Podcast from '../../components/cards/Podcast'
import MediumCard from '../../components/cards/MediumCard'
import Chart from '../../components/chart/Chart'
import CalendarCard from '../../components/CalendarCard'
const Dashboard = () => {
    const obj = {
        title: "Mindfullness ",


    }
    return (
        <div className=" overflow-hidden flex w-full flex-col items-center ">
            <div className="flex w-full flex-col">
                <div className="w-full h-full flex flex-col md:flex-row gap-2 my-1 ">
                    <div className='flex flex-col  w-full md:w-1/3 h-screen gap-2'>
                        <LargeCard />
                        <Podcast title={obj.title} />
                        <MediumCard
                            title="Literary Journey"
                            description="Embark on new adventures through the pages of knowledge! Your dedication to reading is truly inspiring."
                            count={42}
                            containerStyle="flex flex-col bg-white rounded-lg py-2 overflow-hidden"

                        />
                    </div>
                    <div className='flex flex-col  w-full md:w-1/3 h-screen gap-2'>
                        <Chart />
                        <MediumCard
                            title="Track Your Mood"
                            description="Take a moment to reflect on your mood. Tracking your mood can provide valuable insights into your well-being."
                            containerStyle="flex flex-col bg-emerald-50  rounded-lg  overflow-hidden"
                            descriptionStyle='text-gray-500 text-xs w-[20rem] leading-5 mx-5'
                        />
                    </div>
                    <div className='flex flex-col  w-full md:w-1/3 h-screen gap-2'>
                        <CalendarCard />
                        <MediumCard
                            title="Consultation"
                            titleStyle='my-4'
                            description="Embark on the journey to seek guidance by getting a mentor to consult. Take a moment to reflect on your mood"
                            containerStyle="flex flex-col bg-white rounded-lg  overflow-hidden"
                            descriptionStyle='text-gray-500 text-xs w-[20rem] leading-5 mx-5'
                        />
                        <Achievements />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard