import { Grid, Box } from '@mui/material';
import { ExerciseItem, ExerciseItemProps } from '../ExerciseItem';

interface ExerciseListProps {
  items: ExerciseItemProps[];
  maxHeight?: number;
}

export const ExerciseList = (props: ExerciseListProps): JSX.Element => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        maxHeight: props.maxHeight,
        overflowY: 'auto',
      }}
    >
      <Grid container>
        {props.items.map((item: ExerciseItemProps, index) => {
          return (
            <Grid
              key={index}
              item
              xs={6}
              sx={{
                marginTop: '10px',
              }}
            >
              <ExerciseItem
                title={item.title}
                kcal={item.kcal}
                time={item.time}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
