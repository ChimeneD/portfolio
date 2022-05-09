import { makeStyles } from '@mui/styles';
import { colors } from '../colors';

const { background_variant_dark, background_variant_light } = colors;

const container_width_sm = '90%';
export const contact_classes = makeStyles((theme) => ({
  '@global': {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
  },
  contact_container: {
    display: 'grid',
    gridTemplateColumns: '30% 58%',
    gap: '12%',
    //medium screen
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gap: '2rem',
      width: '70%',
    },
    //small screen
    [theme.breakpoints.down('sm')]: {
      width: container_width_sm,
    },
  },
  contact_options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  contact_option: {
    background:
      theme.palette.mode === 'light'
        ? background_variant_light
        : background_variant_dark,
    padding: '1.2rem',
    borderRadius: '1rem',
    border: '2px solid transparent',
    transition: 'all 500ms ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    alignItems: 'center',
    '&:hover': {
      background: 'transparent',
      borderColor: theme.palette.primary.main,
    },
  },
  contact_icon: {
    color: theme.palette.primary.main,
    fontSize: 20,
    marginBottom: '1rem',
  },
}));
