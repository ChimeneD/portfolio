import { makeStyles } from '@mui/styles';
const container_width_lg = '75%';
const container_width_md = '86%';
const container_width_sm = '90%';

export const header_classes = makeStyles((theme) => ({
  '@global': {
    header: {
      height: '100vh',
      overflow: 'hidden',
      paddingTop: '7rem',
    },
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
    '& a': {
      color: theme.palette.primary.main,
      background: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      padding: '0.5rem',
      borderRadius: '50%',
      '&:hover': {
        color: 'red',
      },
    },
  },
  scroll_down: {
    position: 'absolute',
    bottom: '10rem',
    right: 0,
    transform: 'rotate(90deg)',
    color: theme.palette.primary.main,
  },
}));
