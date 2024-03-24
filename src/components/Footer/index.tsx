import Container from '@mui/material/Container';
import { COLOR_DARK_500, COLOR_LIGHT } from '../../commons/colors';
import { Grid, Typography } from '@mui/material';

const Item = (props: { text: string }): JSX.Element => {
  return (
    <Grid item spacing={10} paddingRight={6}>
      <Typography>{props.text}</Typography>
    </Grid>
  );
};

const Footer = (): JSX.Element => {
  return (
    <footer
      style={{
        backgroundColor: COLOR_DARK_500,
        color: COLOR_LIGHT,
        marginTop: 'auto',
      }}
    >
      <Container
        sx={{
          flexDirection: ['column', 'row'],
          display: 'flex',
          alignItems: 'center',
          height: ['auto', 128],
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            flexDirection: ['column', 'row'],
            alignItems: 'center',
          }}
        >
          <Item text={'会員登録'} />
          <Item text={'運営会社'} />
          <Item text={'利用規約'} />
          <Item text={'個人情報の取扱について'} />
          <Item text={'特定商取引法に基づく表記'} />
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
