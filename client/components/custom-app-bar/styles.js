import { makeStyles } from '@material-ui/core/styles';
import { green58 } from '../../constants/colors';

export const customAppBarStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: green58,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
  drawer: {
    background: green58,
  },
  sidebar: {
    width: 'auto',
  },
}));
