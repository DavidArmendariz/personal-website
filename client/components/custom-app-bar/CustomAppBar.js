import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { customAppBarStyles } from './styles';
import SidebarCotent from '../sidebar-content/SidebarContent';

export default function CustomAppBar() {
  const classes = customAppBarStyles();
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
          aria-label="menu"
        >
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
        onOpen={toggleDrawer}
      >
        <div className={classes.sidebar} onClick={toggleDrawer}>
          <SidebarCotent />
        </div>
      </SwipeableDrawer>
    </AppBar>
  );
}
