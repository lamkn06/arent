import { Box, Grid, Link } from '@mui/material';

import { RecordBox } from '../../../components/RecordBox';
import { DairyBox } from '../../../components/DiaryBox';

const data = [
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    day: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
];

const Item = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Grid item xs={3}>
      <Link href={'#'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {children}
        </Box>
      </Link>
    </Grid>
  );
};

export const DiaryList = (): JSX.Element => {
  return (
    <Grid container spacing={1}>
      {data.map((item, index) => (
        <Item key={index}>
          <DairyBox
            day={item.day}
            time={item.time}
            title={item.title}
            content={item.content}
          />
        </Item>
      ))}
    </Grid>
  );
};
