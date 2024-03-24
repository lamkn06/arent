import { Grid, Link } from '@mui/material';
import { InfoBox } from '../../../components/InfoBox';
import Column1 from '../../../assets/images/column-1.jpg';
import Column2 from '../../../assets/images/column-2.jpg';
import Column3 from '../../../assets/images/column-3.jpg';
import Column4 from '../../../assets/images/column-4.jpg';
import Column5 from '../../../assets/images/column-5.jpg';
import Column6 from '../../../assets/images/column-6.jpg';
import Column7 from '../../../assets/images/column-7.jpg';
import Column8 from '../../../assets/images/column-8.jpg';

const data = [
  {
    src: Column1,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
  {
    src: Column2,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
  {
    src: Column3,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
  {
    src: Column4,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
  {
    src: Column5,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
  {
    src: Column6,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
  {
    src: Column7,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
  {
    src: Column8,
    day: '2021.05.17',
    time: '23:25',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理 ', '和食', 'DHA'],
  },
];

const Item = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Grid item>
      <Link href={'/'}>{children}</Link>
    </Grid>
  );
};

export const InfoList = (): JSX.Element => {
  return (
    <Grid container spacing={1}>
      {data.map((item, index) => (
        <Item key={index}>
          <InfoBox
            src={item.src}
            day={item.day}
            time={item.time}
            description={item.description}
            tags={item.tags}
          />
        </Item>
      ))}
    </Grid>
  );
};
