import { Box, Typography } from '@mui/material';
import IconKnife from '../../assets/icons/icon_knife.svg';
import HexagonalBG from '../../assets/images/hexagonal-bg.svg';
import { COLOR_PRIMARY_300, COLOR_PRIMARY_500 } from '../../commons/colors';

interface Props {
  src: string;
}

export const ThumbnailBox = (props: Props): JSX.Element => {
  return (
    <Box
      width={234}
      height={234}
      position={'relative'}
      sx={{
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        <Typography>05.20.Morning</Typography>
      </Box>
    </Box>
  );
};
