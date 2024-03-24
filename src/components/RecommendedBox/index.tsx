import { Box, Divider, Typography } from '@mui/material';
import {
  COLOR_DARK_600,
  COLOR_LIGHT,
  COLOR_PRIMARY_300,
} from '../../commons/colors';

interface Props {
  title: string;
  text: string;
}

export const RecommendedBox = (props: Props): JSX.Element => {
  return (
    <Box
      height={144}
      width={216}
      sx={{
        backgroundColor: COLOR_DARK_600,
      }}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      textAlign={'center'}
    >
      <Typography
        fontSize={22}
        fontWeight={400}
        color={COLOR_PRIMARY_300}
        fontFamily={'Inter'}
      >
        {props.title}
      </Typography>

      <Divider
        variant="middle"
        sx={{
          borderColor: COLOR_LIGHT,
          width: 56,
          margin: '10px 0',
        }}
      />
      <Typography fontSize={18} fontWeight={300}>
        {props.text}
      </Typography>
    </Box>
  );
};
