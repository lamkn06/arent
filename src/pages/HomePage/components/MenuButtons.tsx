import { Box, Grid, Link } from '@mui/material';
import { HexagonalBox } from '../../../components/HexagonalBox';

const Item = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Grid item xs={3}>
      <Link href={'#'} style={{ textDecoration: 'none' }}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {children}
        </Box>
      </Link>
    </Grid>
  );
};

export const MenuButtons = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Item>
        <HexagonalBox text="Morning" />
      </Item>
      <Item>
        <HexagonalBox text="Lunch" />
      </Item>
      <Item>
        <HexagonalBox text="Dinner" />
      </Item>
      <Item>
        <HexagonalBox text="Snack" />
      </Item>
    </Grid>
  );
};
