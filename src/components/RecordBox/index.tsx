import { Box, Typography } from '@mui/material';
import { COLOR_PRIMARY_300, COLOR_PRIMARY_400 } from '../../commons/colors';

interface RecordBoxProps {
  title: string;
  text: string;
  src: string;
}

export const RecordBox = (props: RecordBoxProps): JSX.Element => {
  return (
    <Box
      height={288}
      width={288}
      sx={{
        backgroundColor: COLOR_PRIMARY_300,
      }}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        height={240}
        width={240}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        position={'relative'}
        sx={{
          backgroundImage: `url(${props.src})`,
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          backgroundBlendMode: 'luminosity',
          transition: 'all 0.5s',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#000',
            opacity: 0.5,
          },
          ':hover': {
            transform: ' scale(110%)',
          },
        }}
      />
      <Box
        position="absolute"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        marginTop="10px"
      >
        <Typography
          fontSize={25}
          fontWeight={400}
          color={COLOR_PRIMARY_300}
          fontFamily={'Inter'}
        >
          {props.title}
        </Typography>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          height={24}
          width={160}
          marginTop="10px"
          sx={{
            backgroundColor: COLOR_PRIMARY_400,
            textAlign: 'center',
          }}
        >
          <Typography fontSize={14} fontWeight={300}>
            {props.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
