import { faker } from '@faker-js/faker';
import { Box } from '@mui/material';
import {
  COLOR_DARK_500,
  COLOR_PRIMARY_300,
  COLOR_SECONDARY_300,
} from '../../../commons/colors';
import { Chart } from '../../../components/Chart';

const labels = [
  '6 月',
  '7 月',
  '9 月',
  '10 月',
  '11 月',
  '12 月',
  '1 月',
  '2 月',
  '3 月',
  '4 月',
  '5 月',
];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: COLOR_PRIMARY_300,
    },
    {
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: COLOR_SECONDARY_300,
    },
  ],
};
export const Record = (): JSX.Element => {
  return (
    <Box
      height={312}
      display={'flex'}
      alignItems={'flex-start'}
      justifyContent={'center'}
      flexDirection={'column'}
      sx={{
        background: COLOR_DARK_500,
        padding: '0 30px',
      }}
    >
      <Chart data={data} height={280} />
    </Box>
  );
};
