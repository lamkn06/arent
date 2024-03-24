import { Box, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import {
  COLOR_DARK_500,
  COLOR_PRIMARY_300,
  COLOR_SECONDARY_300,
} from '../../../commons/colors';
import { ButtonChart } from '../../../components/ButtonChart/ButtonChart';
import { Chart } from '../../../components/Chart';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const buttons = ['日', '週', '月', '年'];
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
export const BodyRecord = (): JSX.Element => {
  const date = format(new Date(), 'yyyy.MM.dd');
  const [filter, setFilter] = useState('日');
  const [dataChart, setDataChart] = useState(data);

  const handleFilter = (button: string) => {
    setFilter(button);
    setDataChart({
      labels,
      datasets: [
        {
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 }),
          ),
          borderColor: COLOR_PRIMARY_300,
        },
        {
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 }),
          ),
          borderColor: COLOR_SECONDARY_300,
        },
      ],
    });
  };

  return (
    <Box
      height={304}
      display={'flex'}
      alignItems={'flex-start'}
      justifyContent={'center'}
      flexDirection={'column'}
      sx={{
        background: COLOR_DARK_500,
        padding: '0 50px',
      }}
    >
      <Box display={'flex'}>
        <Typography
          fontFamily={'Inter'}
          fontSize={15}
          fontWeight={400}
          maxWidth={100}
        >
          BODY RECORD
        </Typography>
        <Typography fontFamily={'Inter'} fontSize={22} fontWeight={400}>
          {date}
        </Typography>
      </Box>

      <Chart data={dataChart} />
      <Box>
        <Grid container spacing={3}>
          {buttons.map((button) => (
            <Grid item>
              <ButtonChart
                text={button}
                active={filter === button}
                onClick={() => handleFilter(button)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
