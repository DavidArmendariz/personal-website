import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import * as colors from '../theme/colors';
import ImageAvatar from './ImageAvatar';
import SocialMedia from './SocialMedia';
import Links from './Links';

const SideBarContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.hideOverflow}>
      <Grid container direction="column" className={classes.root} spacing={4}>
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
        <Grid item>
          <Links />
        </Grid>
      </Grid>
    </div>
  );
};

export default SideBarContent;

const useStyles = makeStyles((theme) => ({
  hideOverflow: {
    overflowX: 'hidden',
  },
  root: {
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  name: {
    color: colors.white,
    textAlign: 'center',
  },
  aboutMe: {
    color: colors.white,
    textAlign: 'center',
  },
}));
