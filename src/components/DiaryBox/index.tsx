import { Box, Typography } from '@mui/material';
import { COLOR_DARK_500, COLOR_GRAY } from '../../commons/colors';

interface DairyBoxProps {
  day: string;
  time: string;
  title: string;
  content: string;
}

export const DairyBox = (props: DairyBoxProps): JSX.Element => {
  return (
    <Box
      height={230}
      width={230}
      boxSizing={'border-box'}
      padding={'15px'}
      border={`1px solid ${COLOR_GRAY}`}
      sx={{
        color: COLOR_DARK_500,
      }}
    >
      <Box>
        <Typography fontFamily={'Inter'}>{props.day}</Typography>
        <Typography fontFamily={'Inter'}>{props.time}</Typography>
      </Box>
      <Box marginTop={'15px'}>
        <Typography fontSize={12}>{props.title}</Typography>
        <Typography
          fontSize={12}
          variant="body1"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
          }}
        >
          {props.content}
        </Typography>
      </Box>
    </Box>
  );
};
