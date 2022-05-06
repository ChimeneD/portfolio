import { makeStyles } from '@mui/styles';
import { colors } from '../colors';

const { background_variant_dark, background_variant_light } = colors;
export const portfolio_classes = makeStyles((theme) => ({
  portfolio_container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
    //small screen
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    //small screen
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  portfolio_item: {
    background:
      theme.palette.mode === 'light'
        ? background_variant_light
        : background_variant_dark,
    padding: '1.8rem',
    borderRadius: '2rem',
    border: '2px solid transparent',
    transition: 'all 500ms ease',
    '&:hover': {
      background: 'transparent',
      borderColor: theme.palette.primary.main,
    },
    //small screen
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  portfolio_image: {
    borderRadius: '1.5rem',
    overflow: 'hidden',
  },
  portfolio_heading: {
    margin: '1.2rem 0 2rem',
  },
  portfolio_cta: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  },
}));
