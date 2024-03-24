import { Box, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  COLOR_DARK_500,
  COLOR_PRIMARY_300,
  COLOR_PRIMARY_400,
} from '../../commons/colors';

interface Props {
  src: string;
  day: string;
  time: string;
  description: string;
  tags: string[];
}

export const InfoBox = (props: Props): JSX.Element => {
  return (
    <Box height={224} width={234}>
      <Box
        height={144}
        width={234}
        position={'relative'}
        sx={{
          backgroundImage: `url(${props.src})`,
          backgroundSize: 'cover',
        }}
      >
        <Box
          height={24}
          width={144}
          position={'absolute'}
          bottom={0}
          sx={{
            backgroundColor: COLOR_PRIMARY_300,
          }}
        >
          <Grid container justifyContent={'space-between'} p={'0 10px'}>
            <Grid item>
              <Typography fontFamily={'Inter'} fontSize={15} fontWeight={400}>
                {props.day}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontFamily={'Inter'} fontSize={15} fontWeight={400}>
                {props.time}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography
        variant="body1"
        color={COLOR_DARK_500}
        fontSize={15}
        marginTop={1}
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
        }}
      >
        {props.description}
      </Typography>
      <Grid container spacing={1}>
        {props.tags.map((tag, index) => (
          <Grid item key={index}>
            <Link
              component={RouterLink}
              to="/"
              sx={{
                color: COLOR_PRIMARY_400,
              }}
            >
              #{tag}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
