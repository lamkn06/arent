import { Box, Grid, Link } from '@mui/material';
import M01 from '../../../assets/images/m01.jpg';
import { ThumbnailBox } from '../../../components/ThumbnailBox';

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
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
      <Item>
        <ThumbnailBox src={M01} />
      </Item>
    </Grid>
  );
};
