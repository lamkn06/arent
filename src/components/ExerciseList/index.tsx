import { Grid, Box } from '@mui/material';
import { ExerciseItem, ExerciseItemProps } from '../ExerciseItem';

interface Props {
  items: ExerciseItemProps[];
  maxHeight?: number;
}

export const ExerciseList = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        maxHeight: props.maxHeight,
        overflowY: 'auto',
      }}
    >
      <Grid container>
        {props.items.map((item: ExerciseItemProps) => {
          return (
            <Grid
              item
              xs={6}
              sx={{
                marginTop: '10px',
              }}
            >
              <ExerciseItem
                title={'家事全般（立位・軽い）'}
                kcal={'26kcal'}
                time={'10 min'}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
