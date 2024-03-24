import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  ClickAwayListener,
  Grid,
  IconButton,
  Link,
  Toolbar,
} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import IconChallenge from '../../assets/icons/icon_challenge.svg';
import IconInfo from '../../assets/icons/icon_info.svg';
import IconMemo from '../../assets/icons/icon_memo.svg';
import Logo from '../../assets/images/logo.svg';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { COLOR_DARK_500, COLOR_PRIMARY_400 } from '../../commons/colors';
import HeaderMenuBar from '../HeaderMenuBar';
import { IconText } from '../IconText';

const Header = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <Box sx={{ height: 64 }}>
      <AppBar
        position="static"
        sx={{
          height: 64,
          backgroundColor: COLOR_DARK_500,
        }}
      >
        <Container
          sx={{ maxWidth: { md: 960 }, position: 'relative' }}
          disableGutters
        >
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6} md={4}>
                <Link component={NavLink} to="/">
                  <Box
                    component="img"
                    sx={{
                      width: 144,
                    }}
                    alt="Health"
                    src={Logo}
                  />
                </Link>
              </Grid>
              <Grid item xs={6} md={8}>
                <Grid
                  height={'100%'}
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Link
                    component={NavLink}
                    to="/self-record"
                    sx={{
                      '&.active p': {
                        color: COLOR_PRIMARY_400,
                      },
                    }}
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
                  </Link>
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
                    sx={{ mr: 0, p: 0 }}
                    onClick={() => setShow(!show)}
                  >
                    <MenuIcon
                      sx={{
                        color: COLOR_PRIMARY_400,
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          {show && (
            <ClickAwayListener onClickAway={() => setShow(false)}>
              <Box position={'absolute'} right={0} top={64} zIndex={9}>
                <HeaderMenuBar onClick={() => setShow(false)} />
              </Box>
            </ClickAwayListener>
          )}
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
