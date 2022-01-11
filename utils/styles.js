import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  //layout styles
  navbar: {
    background: 'transparent',
    border: '1px solid rebeccapurple',
    display: 'flex',
    fontFamily: 'Marcellus',
    marginBottom: '20px',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
  },
  nested: {
    paddingLeft: 40,
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    minWidth: 250,
    maxWidth: 950,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 10px',
  },
  main: {
    minHeight: '50vh',
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navBtn: {
    fontFamily: 'Josefin Sans',
    color: 'red',
  },
  card: {
    margin: '10px 0',
    fontFamily: 'Josefin Sans',
  },
  error: {
    color: '#f04040',
  },
  applyForm: {
    width: 600,
    maxWidth: 800,
    margin: '0 auto',
  },
  pictureDisplay: {
    border: '2px solid whitesmoke',
    height: '250px',
    width: '300px',
    margin: '10px 30px 10px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_disp: {
    height: 'auto',
    width: '80%',
    margin: 'auto',
  },
});
