import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { format } from 'date-fns';
import D01 from '../../assets/images/d01.jpg';
import { COLOR_LIGHT, COLOR_PRIMARY_500 } from '../../commons/colors';
import { MenuButtons } from './components/MenuButtons';
import { MenuList } from './components/MenuList';
import Section from '../../components/Section';
import { useState } from 'react';
import { Loading } from '../../components/Loading';
import { Record } from './components/Record';

const HomePage = () => {
  const value = 75;
  const date = format(new Date(), 'MM/dd');

  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Container disableGutters>
      <Grid container>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={{ md: 540 }}
          height={{ md: 312 }}
          sx={{
            backgroundImage: `url(${D01})`,
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
        <Box flex={1}>
          <Record />
        </Box>
      </Grid>
      <Container
        disableGutters
        sx={{
          maxWidth: { md: 960 },
        }}
      >
        <Section>
          <MenuButtons />
        </Section>
        <Section>
          <MenuList />
        </Section>
        {loading && (
          <Section>
            <Loading />
          </Section>
        )}
        <Section
          sx={{
            justifyContent: 'center',
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <Button onClick={handleLoading}>記録をもっと見る</Button>
        </Section>
      </Container>
    </Container>
  );
};

export default HomePage;
