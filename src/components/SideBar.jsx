import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import * as colors from '../theme/colors';
import ImageAvatar from './ImageAvatar';
import SocialMedia from './SocialMedia';

const SideBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container direction="column" className={classes.inner} spacing={4}>
        <Grid item>
          <Typography className={classes.name}>David Armendáriz</Typography>
        </Grid>
        <Grid item>
          <ImageAvatar />
        </Grid>
        <Grid item>
          <Typography className={classes.aboutMe}>
            Hi! My name is David Armendáriz. I am an ecuadorian mathematician
            and software developer. Welcome!
          </Typography>
        </Grid>
        <Grid item>
          <SocialMedia />
        </Grid>
        <Grid item>Test</Grid>
      </Grid>
    </Grid>
  );
};

export default SideBar;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.sidebar,
    padding: theme.spacing(4),
    height: '100vh',
  },
  inner: {
    alignItems: 'center',
  },
  name: {
    color: colors.white,
  },
  aboutMe: {
    color: colors.white,
    textAlign: 'center',
  },
}));
