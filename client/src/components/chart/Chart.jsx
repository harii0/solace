import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title,
  Tooltip, ArcElement, Legend, Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend, Filler
);

const Chart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Anxiety',
        data: [10, 45, 12, 76, 69, 100],
        backgroundColor: 'transparent',
        borderColor: '#3c3c3c',
        borderWidth: 2,
        pointBorderColor: 'transparent',
        tension: 0.4,
        pointBackgroundColor: 'transparent',

      },
      {
        label: 'Stress',
        data: [0, 35, 43, 56, 79, 90],
        backgroundColor: 'transparent',
        borderColor: '#1bab84',
        borderWidth: 2,
        pointBorderColor: 'transparent',
        tension: 0.4,
        pointBackgroundColor: 'transparent',
      },
      {
        label: 'Depression',
        data: [5, 25, 30, 46, 59, 80],
        backgroundColor: 'transparent',
        borderColor: '#0568d5',
        borderWidth: 2,
        pointBorderColor: 'transparent',
        tension: 0.4,
        pointBackgroundColor: 'transparent',
      },
    ],
  };


  const options = {
    devicePixelRatio: 2,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          padding: 20,

          font: {
            size: 8,
            weight: 'medium',
          },
        },
      },
      tooltip: true,
    },
    responsive: true,
    scales: {
      x: {


        grid: {
          display: false
        }
      },
      y: {
        min: 1,
        max: 100,
        ticks: {
          stepSize: 5,
        },
        grid: {
          borderDash: [10],
        }
      }
    },
    title: {
      display: true,
      text: 'Mood Tracker',
      fontSize: 20,
      fontColor: '#3c3c3c',
    }
  };

  return (
    <div className="flex h-[400px] bg-white rounded-md justify-center">
      <div className='flex gap-5 flex-col w-[390px] h-[400px] '>
        <div className='w-full px-2 py-4 flex flex-col gap-2'>
          <span className='font-medium text-lg text-zinc-800'>Mental Wellness</span>
          <span className='text-xs text-zinc-400 font-light w-1/2'>Track and visualize your mental well-being over time.</span>
        </div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;
