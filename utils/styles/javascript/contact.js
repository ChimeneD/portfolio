import { makeStyles } from '@mui/styles';
import { colors } from '../colors';

const {
  text_light,
  text_dark,
  background_variant_dark,
  background_variant_light,
} = colors;
export const contact_classes = makeStyles((theme) => ({
  contact_container: {
    textAlign: 'center',
    height: '100%',
    position: 'relative',
  },
}));
