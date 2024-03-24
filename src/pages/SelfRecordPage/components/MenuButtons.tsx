import { Box, Grid, Link } from '@mui/material';
import MyRecommend01 from '../../../assets/images/myRecommend-1.jpg';
import MyRecommend02 from '../../../assets/images/myRecommend-2.jpg';
import MyRecommend03 from '../../../assets/images/myRecommend-3.jpg';
import { RecordBox } from '../../../components/RecordBox';

const data = [
  {
    title: 'BODY RECORD',
    text: '自分のカラダの記録',
    src: MyRecommend01,
  },
  {
    title: 'MY EXERCISE',
    text: '自分の運動の記録',
    src: MyRecommend02,
  },
  {
    title: 'MY DIARY',
    text: '自分の日記',
    src: MyRecommend03,
  },
];

const Item = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Grid item>
      <Link href={'#'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {children}
        </Box>
      </Link>
    </Grid>
  );
};

export const MenuButtons = (): JSX.Element => {
  return (
    <Grid container justifyContent="space-between">
      {data.map((item, index) => (
        <Item key={index}>
          <RecordBox title={item.title} text={item.text} src={item.src} />
        </Item>
      ))}
    </Grid>
  );
};
