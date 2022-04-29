import { makeStyles } from '@mui/styles';
import { colors } from '../colors';

const {
  background_dark,
  background_light,
  background_variant_dark,
  background_variant_light,
} = colors;
export const service_classes = makeStyles((theme) => ({
  service_container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
  },
  services: {
    background:
      theme.palette.mode === 'light'
        ? background_variant_light
        : background_variant_dark,
    borderRadius: '0 0 2rem 2rem',
    border: `2px solid ${theme.palette.primary.main}`,
    height: 'fit-content',
    transition: 'all 500ms ease',
    '&:hover': {
      background: 'transparent',
      borderColor: theme.palette.primary.main,
      cursor: 'default',
    },
  },
  service_header: {
    background: theme.palette.primary.main,
    padding: '2rem',
    borderRadius: '0 0 2rem 2rem',
    boxShadow: `0 2rem 1rem rgba(0,0,0,0.1)`,
    '& h3': {
      color:
        theme.palette.mode === 'light' ? background_light : background_dark,
      fontSize: '1rem',
      textAlign: 'center',
    },
  },
  service_list: {
    padding: '3rem 2rem',
    '& li': {
      display: 'flex',
      gap: '1rem',
      marginBottom: '0.8rem',
    },
    '& p': {
      fontSize: '0.9rem',
    },
  },
  service_list_icon: {
    fontSize: '0.8rem',
    color: theme.palette.primary.main,
    marginTop: 7,
  },
}));
