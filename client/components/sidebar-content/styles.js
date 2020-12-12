import { makeStyles } from '@material-ui/core/styles';
import { white } from '../../constants/colors';

export const sidebarContentStyles = makeStyles((theme) => ({
  hideOverflow: {
    overflowX: 'hidden',
    height: '100%',
  },
  root: {
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  name: {
    color: white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  aboutMe: {
    color: white,
    textAlign: 'center',
  },
}));
