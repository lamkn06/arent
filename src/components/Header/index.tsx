import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Logo from '../../assets/images/logo.svg';
import IconMemo from '../../assets/icons/icon_memo.svg';
import IconChallenge from '../../assets/icons/icon_challenge.svg';
import IconInfo from '../../assets/icons/icon_info.svg';

import { COLOR_DARK_500 } from '../../commons/colors';
import { IconText } from '../IconText';

const Header = (): JSX.Element => {
  return (
    <Box sx={{ height: 64 }}>
      <AppBar
        position="static"
        sx={{
          height: 64,
          backgroundColor: COLOR_DARK_500,
        }}
      >
        <Container>
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <Box
                  component="img"
                  sx={{
                    width: 144,
                  }}
                  alt="Health"
                  src={Logo}
                />
              </Grid>
              <Grid item xs={6} md={8}>
                <Grid
                  height={'100%'}
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <IconText
                    icon={IconMemo}
                    alt="自分の記録"
                    text="自分の記録"
                    sx={{
                      height: 32,
                      width: 32,
                    }}
                  />
                  <IconText
                    icon={IconChallenge}
                    alt="チャレンジ"
                    text="チャレンジ"
                    sx={{
                      height: 32,
                      width: 32,
                    }}
                  />
                  <IconText
                    icon={IconInfo}
                    alt="お知らせ"
                    text="お知らせ"
                    sx={{
                      height: 32,
                      width: 32,
                    }}
                  />
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
