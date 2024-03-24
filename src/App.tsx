import { ThemeProvider, createTheme } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { customMuiButton, customMuiLink } from './customStyle';

const Layout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const SelfRecordPage = lazy(() => import('./pages/SelfRecordPage'));

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif',
  },
  components: {
    MuiLink: customMuiLink,
    MuiButton: customMuiButton,
  },
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/self-record',
        element: <SelfRecordPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<>loading</>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
