import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { sidebarContentStyles } from './styles';
import Links from '../links/Links';
import ImageAvatar from '../image-avatar/ImageAvatar';
import SocialMedia from '../social-media/SocialMedia';

export default function SidebarContent() {
  const classes = sidebarContentStyles();
  return (
    <div id="sidebar-content" className={classes.hideOverflow}>
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
}
