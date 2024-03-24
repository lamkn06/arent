import { Container } from '@mui/material';
import { lazy } from 'react';
import { Outlet } from 'react-router';
const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container
        disableGutters
        sx={{
          paddingBottom: 4,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
