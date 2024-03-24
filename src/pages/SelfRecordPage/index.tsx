import { Box, Button, Container } from '@mui/material';

import { MenuButtons } from './components/MenuButtons';
import { DiaryList } from './components/DiaryList';

const SelfRecordPage = () => {
  return (
    <Container disableGutters>
      <Box marginTop={'20px'}>
        <MenuButtons />
      </Box>
      <Box marginTop={'20px'}>
        <DiaryList />
      </Box>
      <Box
        marginTop={'20px'}
        justifyContent={'center'}
        display={'flex'}
        alignContent={'center'}
      >
        <Button>自分の日記をもっと見る</Button>
      </Box>
    </Container>
  );
};

export default SelfRecordPage;
