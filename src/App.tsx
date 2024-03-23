import { ThemeProvider, createTheme } from '@mui/material';
import { lazy } from 'react';
import { COLOR_LIGHT } from './commons/colors';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const HomePage = lazy(() => import('./pages/HomePage'));

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
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
