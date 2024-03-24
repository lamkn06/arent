import { Box, Typography } from '@mui/material';
import { ExerciseList } from '../../../components/ExerciseList';
import { COLOR_DARK_500 } from '../../../commons/colors';

const items = [
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
];

export const MyExerciseList = (): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: COLOR_DARK_500,
        maxHeight: 264,
        overflow: 'hidden',
      }}
      p={`10px 30px`}
    >
      <Box display={'flex'}>
        <Typography maxWidth={80} fontSize={15}>
          MY EXERCISE
        </Typography>
        <Typography marginLeft={'20px'} fontSize={22}>
          2021.05.21
        </Typography>
      </Box>
      <ExerciseList items={items} maxHeight={210} />
    </Box>
  );
};
