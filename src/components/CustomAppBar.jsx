import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as colors from '../theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    backgroundColor: colors.sidebar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton
          onClick={() => console.log('OK')}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          David Armendáriz
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
