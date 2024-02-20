import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        dataLabel: {
            display: false,
        }
    },
    scales: {
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            },
            min: 0,
            max: 100
        },
        x: {
            grid: { color: '#777' },
            border: {
                display: false
            },
            ticks: {
                font: {
                    size: 12,
                },
                color: '#fff'
            }
        }
    }
};

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export default function Chart({ chartData }) {
    return (
        <Line options={options} data={{labels, ...chartData}}/>
    )
}