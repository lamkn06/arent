import { Box, Typography } from '@mui/material';
import { COLOR_PRIMARY_300 } from '../../commons/colors';

interface ThumbnailBoxProps {
  src: string;
  text: string;
}

export const ThumbnailBox = (props: ThumbnailBoxProps): JSX.Element => {
  return (
    <Box overflow={'hidden'} position={'relative'}>
      <Box
        width={234}
        height={234}
        sx={{
          backgroundImage: `url(${props.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.5s',
          ':hover': {
            transform: ' scale(120%)',
          },
        }}
      >
        <Box
          position={'absolute'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          p={'0 10px'}
          height={32}
          bottom={0}
          sx={{
            backgroundColor: COLOR_PRIMARY_300,
          }}
        >
          <Typography fontFamily={'Inter'} fontSize={15} fontWeight={400}>
            {props.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
