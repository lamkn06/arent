import { Grid, SxProps, Theme, Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface Props {
  icon: string;
  text: string;
  alt?: string;
  sx?: SxProps<Theme>;
}

const IconText = (props: Props): JSX.Element => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      width={{ xs: 160, md: 160 }}
    >
      <Box component="img" sx={props.sx} alt={props.alt} src={props.icon} />
      <Typography>{props.text}</Typography>
    </Grid>
  );
};

export default IconText;
