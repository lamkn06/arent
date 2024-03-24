import CircleIcon from '@mui/icons-material/Circle';
import { Grid, ListItem, Typography } from '@mui/material';
import { COLOR_GRAY, COLOR_PRIMARY_300 } from '../../commons/colors';

export interface ExerciseItemProps {
  title: string;
  kcal: string;
  time: string;
}

export const ExerciseItem = (props: ExerciseItemProps): JSX.Element => {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        borderBottom: `1px solid ${COLOR_GRAY}`,
        padding: '0',
        maxWidth: 416,
        height: 40,
      }}
    >
      <CircleIcon
        sx={{
          height: 7,
          width: 7,
          marginRight: 2,
          marginTop: 1,
        }}
      />
      <Grid justifyContent={'space-between'} display={'flex'} flex={1}>
        <Grid item>
          <Typography fontSize={15} fontWeight={300} lineHeight={'20px'}>
            {props.title}
          </Typography>
          <Typography
            fontSize={15}
            fontWeight={400}
            color={COLOR_PRIMARY_300}
            lineHeight={'18px'}
            fontFamily={'Inter'}
          >
            {props.kcal}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontSize={18}
            fontWeight={400}
            color={COLOR_PRIMARY_300}
            fontFamily={'Inter'}
          >
            {props.time}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};
