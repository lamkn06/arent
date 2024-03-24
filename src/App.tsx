import { Container, ThemeProvider, createTheme } from '@mui/material';
import { lazy } from 'react';
import {
  COLOR_DARK_500,
  COLOR_LIGHT,
  COLOR_PRIMARY_300,
  COLOR_PRIMARY_400,
} from './commons/colors';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const HomePage = lazy(() => import('./pages/HomePage'));
const SelfRecordPage = lazy(() => import('./pages/SelfRecordPage'));

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: COLOR_LIGHT,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 300,
          color: COLOR_LIGHT,
          height: 56,
          width: 296,
          borderRadius: 5,
          backgroundColor: COLOR_DARK_500,
          backgroundImage: `linear-gradient(to top, ${COLOR_PRIMARY_300} 0%, ${COLOR_PRIMARY_400} 100%)`,
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/self-record',
    element: <SelfRecordPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container
        disableGutters
        sx={{
          maxWidth: { md: 960 },
        }}
      >
        <RouterProvider router={router} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
