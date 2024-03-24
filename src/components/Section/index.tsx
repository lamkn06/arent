import { Box, SxProps, Theme } from '@mui/material';

interface Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Section = (props: Props): JSX.Element => {
  return (
    <Box marginTop={'40px'} sx={props.sx}>
      {props.children}
    </Box>
  );
};

export default Section;
