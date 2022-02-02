import { makeStyles } from '@mui/styles';

export const classes = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '*::-webkit-scrollbar-thumb': {
      background: theme.palette,
    },
  },
  container: {
    padding: 10,
    height: '90vh',
  },
  cardContainer: {
    padding: 20,
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
  },
  navCard: {
    padding: 5,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 20px',
  },
  navLink: {
    cursor: 'pointer',
    fontFamily: 'Josefin Sans',
    marginRight: 10,
    marginLeft: 10,
    textTransform: 'uppercase',
    fontSize: 11,
    transition: '1s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '0 10px',
    '&:hover': {
      color: '#00e676',
    },
  },
  //index page
  profileImage: {
    width: 300,
    borderRadius: '50%',
  },
}));
