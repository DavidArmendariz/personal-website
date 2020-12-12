import React from 'react';
import { Grid } from '@material-ui/core';
import SidebarContent from '../sidebar-content/SidebarContent';
import { sidebarStyles } from './styles';

export default function SideBar() {
  const classes = sidebarStyles();
  return (
    <Grid container className={classes.root}>
      <SidebarContent />
    </Grid>
  );
}
