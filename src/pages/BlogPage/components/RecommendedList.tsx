import { Grid, Link } from '@mui/material';
import { RecommendedBox } from '../../../components/RecommendedBox';

const data = [
  {
    title: 'RECOMMENDED COLUMN',
    text: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    text: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    text: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    text: '健康',
  },
];

const Item = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Grid item>
      <Link href={'/'}>{children}s</Link>
    </Grid>
  );
};

export const RecommendedList = (): JSX.Element => {
  return (
    <Grid container justifyContent={'space-between'}>
      {data.map((item, index) => (
        <Item key={index}>
          <RecommendedBox title={item.title} text={item.text} />
        </Item>
      ))}
    </Grid>
  );
};
