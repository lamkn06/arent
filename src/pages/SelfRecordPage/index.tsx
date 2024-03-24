import { Button, Container } from '@mui/material';

import { useState } from 'react';
import { Loading } from '../../components/Loading';
import Section from '../../components/Section';
import { BodyRecord } from './components/BodyRecord';
import { DiaryList } from './components/DiaryList';
import { MenuButtons } from './components/MenuButtons';
import { MyExerciseList } from './components/MyExerciseList';

const SelfRecordPage = () => {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Container disableGutters>
      <Section>
        <MenuButtons />
      </Section>
      <Section>
        <BodyRecord />
      </Section>
      <Section>
        <MyExerciseList />
      </Section>
      <Section>
        <DiaryList />
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
        <Button onClick={handleLoading}>自分の日記をもっと見る</Button>
      </Section>
    </Container>
  );
};

export default SelfRecordPage;
