import { Box } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { COLOR_DARK_500, COLOR_GRAY, COLOR_LIGHT } from '../../commons/colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    grid: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: COLOR_LIGHT,
        font: {
          size: 12,
          weight: 400,
        },
        borderColor: COLOR_LIGHT,
        display: true,
      },

      grid: {
        drawBorder: false,
        display: true,
        color: COLOR_GRAY,
      },
    },
    y: {
      ticks: {
        display: false,
        beginAtZero: false,
      },

      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
};

interface ChartProps {
  data: any;
}

export const Chart = (props: ChartProps): JSX.Element => {
  return (
    <Box
      sx={{
        background: COLOR_DARK_500,
      }}
      height={185}
      width={'100%'}
    >
      <Line options={options} data={props.data} />
    </Box>
  );
};
