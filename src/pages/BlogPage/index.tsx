import { Button, Container } from '@mui/material';

import Section from '../../components/Section';
import { RecommendedList } from './components/RecommendedList';
import { InfoList } from './components/InfoList';

const BlogPage = () => {
  return (
    <Container
      disableGutters
      sx={{
        maxWidth: { md: 960 },
      }}
    >
      <Section>
        <RecommendedList />
      </Section>
      <Section>
        <InfoList />
      </Section>

      <Section
        sx={{
          justifyContent: 'center',
          display: 'flex',
          alignContent: 'center',
        }}
      >
        <Button>コラムをもっと見る</Button>
      </Section>
    </Container>
  );
};

export default BlogPage;
