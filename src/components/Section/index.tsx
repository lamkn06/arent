import { Box, SxProps, Theme } from '@mui/material';

interface SectionProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Section = (props: SectionProps): JSX.Element => {
  return (
    <Box marginTop={'40px'} sx={props.sx}>
      {props.children}
    </Box>
  );
};

export default Section;
