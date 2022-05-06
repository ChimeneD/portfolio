import { makeStyles } from '@mui/styles';
import { colors } from '../colors';
const container_width_lg = '75%';
const container_width_md = '86%';
const container_width_sm = '90%';

const { text_light, text_dark, background_dark_two, background_light_two } =
  colors;
export const main_class = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '*::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },
  },

  container: {
    width: container_width_lg,
    margin: '0 auto',
    //medium screen
    [theme.breakpoints.down('md')]: {
      width: container_width_md,
    },
    //small screen
    [theme.breakpoints.down('sm')]: {
      width: container_width_sm,
    },
  },
  btn: {
    width: 'max-content',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    border: `2px solid ${theme.palette.primary.main}`,
    transition: 'all 400ms ease',
    //small screen
    [theme.breakpoints.down('sm')]: {
      padding: '0.3rem 0.8rem',
    },
  },
  btn_contained: {
    color: theme.palette.mode === 'light' ? text_light : text_dark,
    background: theme.palette.primary.main,
    '&:hover': {
      background:
        theme.palette.mode === 'light'
          ? background_dark_two
          : background_light_two,
    },
  },
  btn_outlined: {
    color: theme.palette.primary.main,
    background: 'transparent',
    '&:hover': {
      background:
        theme.palette.mode === 'light'
          ? background_dark_two
          : background_light_two,
    },
  },
}));
