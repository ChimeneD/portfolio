import { makeStyles } from '@mui/styles';

export const classes = makeStyles((/*theme*/) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '*::-webkit-scrollbar-thumb': {
      background: '#616161',
    },
  },
  container: {
    padding: 10,
    height: '90vh',
    marginTop: '10vh',
  },
  cardContainer: {
    padding: 5,
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
  },
  formContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 800,
  },
  projectCard: {
    width: 300,
    fontFamily: 'Josefin Sans',
    margin: 20,
  },
  textField: { margin: '10px 0' },
  navLink: {
    cursor: 'pointer',
    fontFamily: 'Poiret One',
    fontWeight: 900,
    letterSpacing: 3,
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
      animation: '$shake 1s infinite',
    },
  },
  logoLink: {
    display: 'flex',
    cursor: 'pointer',
  },
  logoText: {
    fontFamily: 'Comforter',
    fontSize: 35,
  },
  /* Parallax Classes*/
  parallax_container: {
    minHeight: 400,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* Parallax images */
  parallax_about: {
    /* The image used */
    backgroundImage: 'url(/images/about_me_dark.png)',
    /* Set a specific height */
    minHeight: 400,
    position: 'absolute',
    width: '100%',
    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.3,
  },
  parallax_project: {
    /* The image used */
    backgroundImage: 'url(/images/project_dark.png)',
    /* Set a specific height */
    minHeight: 400,
    width: '100%',
    position: 'absolute',
    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.3,
  },
  parallax_contact: {
    /* The image used */
    backgroundImage: 'url(/images/get_in_touch_dark.png)',
    /* Set a specific height */
    minHeight: 400,
    width: '100%',
    position: 'absolute',
    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.3,
  },
  /* Animation */
  blink: { animation: '$blink 1s infinite' },
  '@keyframes blink': {
    '0%': {
      opacity: 0.1,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  '@keyframes shake': {
    '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
    '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
    '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
    '30%': { transform: 'translate(3px, 2px) rotate(0deg) ' },
    '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
    '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
    '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
    '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
    '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
    '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
    '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
  },
  animTypewriter: {
    fontSize: 30,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: '$typewriter 2s steps(13) 1s infinite alternate',
  },
  '@keyframes typewriter': {
    from: { width: '0%' },
    to: { width: '5em' },
  },
  //index page
  profileImage: {
    width: 300,
    borderRadius: '50%',
  },
}));
