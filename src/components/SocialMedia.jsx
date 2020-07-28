import React from 'react';
import { Grid } from '@material-ui/core';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const SocialMedia = () => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <SocialMediaIconsReact
          icon="twitter"
          iconSize="3"
          roundness="50%"
          url="https://twitter.com/DavidAP1998"
        />
      </Grid>
      <Grid item>
        <SocialMediaIconsReact
          icon="linkedin"
          iconSize="3"
          roundness="50%"
          url="https://www.linkedin.com/in/david-adrian-armendariz/"
        />
      </Grid>
      <Grid item>
        <SocialMediaIconsReact
          icon="github"
          iconSize="3"
          roundness="50%"
          url="https://github.com/DavidArmendariz"
        />
      </Grid>
      <Grid item>
        <SocialMediaIconsReact
          icon="youtube"
          iconSize="3"
          roundness="50%"
          url="https://www.youtube.com/channel/UC4jmaY21ri9n3DteRwuoJaA"
        />
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
