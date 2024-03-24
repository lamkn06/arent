import {
  COLOR_LIGHT,
  COLOR_DARK_500,
  COLOR_PRIMARY_300,
  COLOR_PRIMARY_400,
} from './commons/colors';

export const customMuiButton = {
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
};

export const customMuiLink = {
  styleOverrides: {
    root: {
      textDecoration: 'none',
      color: COLOR_LIGHT,
    },
  },
};
