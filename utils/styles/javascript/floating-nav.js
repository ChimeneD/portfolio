import { makeStyles } from '@mui/styles';
import { colors } from '../colors';
const { text_light, text_dark, background_dark_two, background_light_two } =
  colors;

export const nav_classes = makeStyles((theme) => ({
  '@global': {
    nav: {
      background:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(1,1,1,0.3)',
      width: 'maximum-content',
      padding: '0.7rem 1.7rem',
      zIndex: 2,
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '2rem',
      display: 'flex',
      gap: '0.8rem',
      borderRadius: '1.2rem',
      backdropFilter: 'blur(15px)',
      '& a': {
        color: theme.palette.primary.main,
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 18,
        padding: '0.5rem',
        borderRadius: '50%',
        '&:hover': {
          color: theme.palette.mode === 'light' ? text_dark : text_light,
          background:
            theme.palette.mode === 'light'
              ? background_light_two
              : background_dark_two,
        },
      },
    },
  },
  active: {
    color: theme.palette.mode === 'light' ? text_dark : text_light,
    background:
      theme.palette.mode === 'light'
        ? background_light_two
        : background_dark_two,
  },
  header_container: {
    textAlign: 'center',
    height: '100%',
    position: 'relative',
  },
  cta: {
    marginTop: '2.5rem',
    display: 'flex',
    gap: '1rem',
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
      borderRadius: '50%',
      '&:hover': {
        color: theme.palette.mode === 'light' ? text_dark : text_light,
        background: theme.palette.mode === 'light' ? text_dark : text_light,
      },
    },
  },
  scroll_down: {
    position: 'absolute',
    bottom: '10rem',
    right: 0,
    transform: 'rotate(90deg)',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.mode === 'light' ? text_dark : text_light,
    },
  },
}));
