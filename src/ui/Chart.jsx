import styled from 'styled-components'
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
            }
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

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [95, 90, 85, 82, 72, 70, 65, 62, 58, 55, 53, 52],
            borderColor: '#8FE9D0',
            backgroundColor: '#8FE9D0',
        },
        {
            label: 'Dataset 2',
            data: [95, 93, 82, 85, 80, 75, 80, 73, 70, 70, 68, 75],
            borderColor: '#FFCC21',
            backgroundColor: '#FFCC21',
        },
    ],
};

const Wrapper = styled.div`
    width: 100%;
    padding: 16px 53px;
    background-color: var(--color-dark-1);
`

export default function Chart() {
    return (
        <Wrapper>
            <Line options={options} data={data}/>
        </Wrapper>
    )
}