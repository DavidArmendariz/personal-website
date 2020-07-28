import React from 'react';
import { Grid, makeStyles, Typography, Box } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container direction="column" item>
        <Grid item>
          <Typography variant="h4">
            <Box fontWeight="fontWeightMedium">David Armendáriz</Box>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <Box fontWeight="fontWeightLight">
              Mathematician & Software Developer
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
}));
