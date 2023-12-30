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
    <div className="flex flex-col h-[400px] bg-white rounded-md justify-center">
      <div className='flex w-[390px] h-[400px] justify-center items-center'>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;
