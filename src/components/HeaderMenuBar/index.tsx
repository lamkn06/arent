import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { COLOR_DARK_600, COLOR_GRAY } from '../../commons/colors';

const data = [
  {
    title: '自分の記録',
    link: '/',
  },
  {
    title: '体重グラフ',
    link: '/',
  },
  {
    title: '目標',
    link: '/',
  },
  {
    title: '選択中のコース',
    link: '/',
  },
  {
    title: 'コラム一覧',
    link: '/',
  },
  {
    title: '設定',
    link: '/',
  },
];

const HeaderMenuBar = (): JSX.Element => {
  return (
    <Box
      width={280}
      sx={{
        backgroundColor: COLOR_GRAY,
      }}
    >
      {data.map((item, index) => (
        <Link component={RouterLink} to={item.link} key={index}>
          <Box
            display={'flex'}
            alignItems={'center'}
            height={72}
            boxSizing={'border-box'}
            zIndex={9}
            sx={{
              borderTop: `1px solid ${COLOR_DARK_600}`,
              boxShadow: `inset 0px 1px 0px rgba(255, 255, 255, 0.3)`,
            }}
          >
            <Typography fontSize={18} fontWeight={300} padding={'0 20px'}>
              {item.title}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default HeaderMenuBar;
