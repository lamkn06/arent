import { Box, Button, Container } from '@mui/material';

import { MenuButtons } from './components/MenuButtons';
import { DiaryList } from './components/DiaryList';
import Section from '../../components/Section';
import { MyExerciseList } from './components/MyExerciseList';

const SelfRecordPage = () => {
  return (
    <Container disableGutters>
      <Section>
        <MenuButtons />
      </Section>
      <Section>
        <MyExerciseList />
      </Section>
      <Section>
        <DiaryList />
      </Section>
      <Section
        sx={{
          justifyContent: 'center',
          display: 'flex',
          alignContent: 'center',
        }}
      >
        <Button>自分の日記をもっと見る</Button>
      </Section>
    </Container>
  );
};

export default SelfRecordPage;
