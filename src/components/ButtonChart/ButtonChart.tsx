import { Button, Typography } from '@mui/material';
import { COLOR_LIGHT, COLOR_PRIMARY_300 } from '../../commons/colors';

interface ButtonChartProps {
  text: string;
  active: boolean;
  onClick?: () => void;
}

export const ButtonChart = (props: ButtonChartProps): JSX.Element => {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        minWidth: 56,
        maxWidth: 56,
        height: 24,
        backgroundColor: props.active ? COLOR_PRIMARY_300 : COLOR_LIGHT,
        backgroundImage: 'none',
        borderRadius: 15,
        color: props.active ? COLOR_LIGHT : COLOR_PRIMARY_300,
        '&:hover': {
          backgroundColor: COLOR_PRIMARY_300,
          color: COLOR_LIGHT,
        },
      }}
    >
      <Typography>{props.text}</Typography>
    </Button>
  );
};
