import { Box, Grid, Link } from '@mui/material';
import M01 from '../../../assets/images/m01.jpg';
import L03 from '../../../assets/images/l03.jpg';
import D01 from '../../../assets/images/d01.jpg';
import L01 from '../../../assets/images/l01.jpg';
import L02 from '../../../assets/images/l02.jpg';
import D02 from '../../../assets/images/d02.jpg';
import S01 from '../../../assets/images/s01.jpg';

import { ThumbnailBox } from '../../../components/ThumbnailBox';

const data = [
  {
    src: M01,
    text: '05.21.Morning',
  },
  {
    src: L03,
    text: '05.21.Lunch',
  },
  {
    src: D01,
    text: '05.21.Dinner',
  },
  {
    src: L01,
    text: '05.21.Snack',
  },
  {
    src: M01,
    text: '05.20.Morning',
  },
  {
    src: L02,
    text: '05.20.Lunch',
  },
  {
    src: D02,
    text: '05.20.Dinner',
  },
  {
    src: S01,
    text: '05.20.Snack',
  },
];

const Item = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Grid item>
      <Link href={'#'} style={{ textDecoration: 'none' }}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {children}
        </Box>
      </Link>
    </Grid>
  );
};

export const MenuList = (): JSX.Element => {
  return (
    <Grid container spacing={1}>
      {data.map((item, index) => (
        <Item key={index}>
          <ThumbnailBox src={item.src} text={item.text} />
        </Item>
      ))}
    </Grid>
  );
};
