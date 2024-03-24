import { Grid, SxProps, Theme, Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface IconTextProps {
  icon: string;
  text: string;
  alt?: string;
  sx?: SxProps<Theme>;
}

export const IconText = (props: IconTextProps): JSX.Element => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      width={{ xs: 160, md: 160 }}
    >
      <Box component="img" sx={props.sx} alt={props.alt} src={props.icon} />
      <Typography paddingLeft={{ md: 1 }}>{props.text}</Typography>
    </Grid>
  );
};
