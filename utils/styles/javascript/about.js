import { makeStyles } from '@mui/styles';
import { colors } from '../colors';

const { background_variant_dark, background_variant_light } = colors;
export const about_classes = makeStyles((theme) => ({
  about_container: {
    display: 'grid',
    gridTemplateColumns: '35% 50%',
    gap: '15%',
    alignContent: 'center',
    //medium screen
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gap: 0,
    },
    //small screen
    [theme.breakpoints.down('sm')]: {},
  },

  about_me: {
    aspectRatio: '1/1',
    borderRadius: '1rem',
    background: `linear-gradient(45deg, transparent, ${theme.palette.primary.main}, transparent)`,
    display: 'grid',
    placeItems: 'center',
    padding: '0.4rem', //medium screen
    [theme.breakpoints.down('md')]: {
      width: '50%',
      margin: '2rem auto 4rem',
    },
    //small screen
    [theme.breakpoints.down('sm')]: {
      width: '65%',
      margin: '1rem auto 3rem',
    },
  },
  about_me_image: {
    borderRadius: '1rem',
    overflow: 'hidden',
    transform: 'rotate(10deg)',
    transition: 'all 500ms ease',
    '&:hover': {
      transform: 'rotate(0)',
    },
  },
  about_content: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    //small screen
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    '& p': {
      margin: '2rem 0 2.6rem',
      color: theme.palette.secondary.main,
      //medium screen
      [theme.breakpoints.down('md')]: {
        margin: '1rem 0 1.5rem',
      },
      //small screen
      [theme.breakpoints.down('sm')]: {
        margin: '1.5rem 0',
        fontSize: '13px',
      },
    },
  },
  about_cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    //small screen
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
    },
  },
  about_card: {
    background: `${
      theme.palette.mode === 'light'
        ? background_variant_light
        : background_variant_dark
    }`,
    border: `1px solid transparent`,
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 500ms ease',
    cursor: 'default',
    '&:hover': {
      background: 'transparent',
      borderColor: theme.palette.primary.main,
    },
    '& h5': { fontSize: '0.95rem' },
    '& small': {
      fontSize: '0.7rem',
      color: theme.palette.secondary.main,
    },
  },
  about_icon: {
    color: theme.palette.primary.main,
    fontSize: '1.4rem',
    marginBottom: '1rem',
  },
}));
