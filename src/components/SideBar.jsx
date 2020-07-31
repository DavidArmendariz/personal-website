import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import * as colors from '../theme/colors';
import SideBarContent from './SideBarContent';

const SideBar = () => {
  const classes = useStyles();
  return (
    <Grid id="sidebar-container" container className={classes.root}>
      <SideBarContent />
    </Grid>
  );
};

export default SideBar;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.green,
    height: '100%',
    width: 400,
  },
}));
