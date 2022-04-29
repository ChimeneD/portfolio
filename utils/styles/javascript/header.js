import { makeStyles } from '@mui/styles';
import { colors } from '../colors';

const {
  text_light,
  text_dark,
  background_variant_dark,
  background_variant_light,
} = colors;
export const header_classes = makeStyles((theme) => ({
  '@global': {
    header: {
      height: '100vh',
      overflow: 'hidden',
      paddingTop: '7rem',
      //medium screen
      [theme.breakpoints.down('lg')]: {
        height: '65vh',
      },
      //small screen
      [theme.breakpoints.down('md')]: {
        height: '100vh',
      },
    },
  },
  header_container: {
    textAlign: 'center',
    height: '100%',
    position: 'relative',
  },
  name: {
    //small screen
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  cta: {
    marginTop: '2.5rem',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
  },
  header_socials: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    position: 'absolute',
    bottom: '5rem',
    left: 0,
    //small screen
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    '&::after': {
      content: '""',
      width: '2px',
      height: '2.5rem',
      background: theme.palette.primary.main,
    },
    '& a': {
      color: theme.palette.mode === 'light' ? text_light : text_dark,
      background: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      padding: '0.5rem',
      fontSize: 20,
      borderRadius: '50%',
      '&:hover': {
        color: theme.palette.mode === 'light' ? text_dark : text_light,
        background:
          theme.palette.mode === 'light'
            ? background_variant_light
            : background_variant_dark,
      },
    },
  },
  scroll_down: {
    position: 'absolute',
    bottom: '10rem',
    right: '-2.3rem',
    transform: 'rotate(90deg)',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    //small screen
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
    },
  },
}));
