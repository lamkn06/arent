import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { format } from 'date-fns';
import d01 from '../../assets/images/d01.jpg';
import { COLOR_LIGHT, COLOR_PRIMARY_500 } from '../../commons/colors';
import { MenuButtons } from './components/MenuButtons';

const HomePage = () => {
  const value = 75;
  const date = format(new Date(), 'MM/dd');
  return (
    <Container>
      <Grid container>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={{ md: 540 }}
          height={{ md: 312 }}
          sx={{
            backgroundImage: `url(${d01})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            width={181}
            height={181}
          >
            <Box position={'absolute'}>
              <CircularProgress
                variant="determinate"
                value={value}
                size={181}
                thickness={1}
                sx={{
                  color: COLOR_LIGHT,
                  borderRadius: '50%',
                }}
              />
            </Box>
            <Typography
              fontSize={18}
              fontFamily={'Inter'}
              sx={{
                textShadow: `0 0 5px ${COLOR_PRIMARY_500}`,
              }}
            >
              {date}
            </Typography>
            <Typography
              fontSize={25}
              fontFamily={'Inter'}
              marginBottom={'5px'}
              marginLeft={'5px'}
              sx={{
                textShadow: `0 0 5px ${COLOR_PRIMARY_500}`,
              }}
            >
              {value}%
            </Typography>
          </Box>
        </Box>
        <Box flex={1}>w</Box>
      </Grid>
      <MenuButtons />
    </Container>
  );
};

export default HomePage;