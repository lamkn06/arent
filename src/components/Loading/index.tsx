import { Box, CircularProgress } from '@mui/material';
import { COLOR_PRIMARY_300 } from '../../commons/colors';

export const Loading = (): JSX.Element => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <CircularProgress sx={{ color: COLOR_PRIMARY_300 }} />
    </Box>
  );
};
