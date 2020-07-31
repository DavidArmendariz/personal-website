import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as colors from '../theme/colors';
import { SwipeableDrawer } from '@material-ui/core';
import SideBarContent from './SideBarContent';

const CustomAppBar = () => {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton
          onClick={toggleDrawer}
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
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        anchor="top"
        open={showDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}>
        <div className={classes.sidebar} onClick={toggleDrawer}>
          <SideBarContent />
        </div>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default CustomAppBar;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.green,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
  drawer: {
    background: colors.green,
  },
  sidebar: {
    width: 'auto',
  },
}));
