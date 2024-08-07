import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TooltipItem } from 'chart.js';

// Register ChartJS components once
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceAnalytics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Grades',
        data: [85, 90, 88, 92, 87, 94],
        fill: false,
        borderColor: '#4A90E2',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'line'>) {
            return `Grade: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-background p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Performance Analytics</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceAnalytics;
