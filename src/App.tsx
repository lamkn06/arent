import { lazy } from 'react';
import './App.css';
import { Container } from '@mui/material';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <>
      <Header />
      <Container></Container>
      <Footer />
    </>
  );
};

export default App;
