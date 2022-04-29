import { makeStyles } from '@mui/styles';
import { colors } from '../colors';

const { background_variant_dark, background_variant_light } = colors;

export const skill_classes = makeStyles((theme) => ({
  skill_container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    '& > div': {
      background:
        theme.palette.mode === 'light'
          ? background_variant_light
          : background_variant_dark,
      padding: '4rem 5rem',
      borderRadius: '1rem',
      border: '1px solid transparent',
      transition: 'all 500ms ease',
      '&:hover': {
        background: 'transparent',
        borderColor: theme.palette.primary.main,
        cursor: 'default',
      },
      '& h3': {
        textAlign: 'center',
        marginBottom: '2rem',
        //small screen
        [theme.breakpoints.down('md')]: {
          fontSize: '1rem',
        },
      },
      //medium screen
      [theme.breakpoints.down('lg')]: {
        width: '80%',
        padding: '2rem',
        margin: '0 auto',
      },
      //small screen
      [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: '2rem 1rem',
      },
    },
    //medium screen
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr',
    },
    //small screen
    [theme.breakpoints.down('md')]: {
      gap: '1rem',
    },
  },
  skill_content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '2rem',
    [theme.breakpoints.down('lg')]: {
      padding: '1rem',
    },
  },
  skill_details: {
    display: 'flex',
    gap: '1rem',
    '& small': {
      color: theme.palette.secondary.main,
    },
    '& div': {
      '& > h4': {
        //small screen
        [theme.breakpoints.down('md')]: {
          fontSize: '0.8rem',
        },
      },
      '& > small': {
        //small screen
        [theme.breakpoints.down('md')]: {
          fontSize: '0.6rem',
        },
      },
    },
  },
  skill_icon: {
    color: theme.palette.primary.main,
    fontSize: '1rem',
    marginBottom: '1rem',
  },
}));
