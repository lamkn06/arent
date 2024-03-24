import { Box, Typography } from '@mui/material';
import IconKnife from '../../assets/icons/icon_knife.svg';
import HexagonalBG from '../../assets/images/hexagonal-bg.svg';

interface HexagonalBoxProps {
  text: string;
}

export const HexagonalBox = (props: HexagonalBoxProps): JSX.Element => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      width={116}
      height={134}
      sx={{
        backgroundImage: `url(${HexagonalBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        width={56}
        height={56}
        sx={{
          backgroundImage: `url(${IconKnife})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Typography fontFamily={'Inter'} fontWeight={400}>
        {props.text}
      </Typography>
    </Box>
  );
};
