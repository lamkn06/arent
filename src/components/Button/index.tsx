import { Button as ButtonMui } from '@mui/material';
import {
  COLOR_DARK_500,
  COLOR_LIGHT,
  COLOR_PRIMARY_300,
  COLOR_PRIMARY_400,
} from '../../commons/colors';

const Button = (): JSX.Element => {
  return (
    <ButtonMui
      sx={{
        color: COLOR_LIGHT,
        height: 56,
        width: 296,
        borderRadius: 1,
        backgroundColor: COLOR_DARK_500,
        backgroundImage: `linear-gradient(to top, ${COLOR_PRIMARY_300} 0%, ${COLOR_PRIMARY_400} 100%)`,
      }}
    >
      記録をもっと見る
    </ButtonMui>
  );
};

export default Button;
