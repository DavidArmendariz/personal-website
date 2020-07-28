import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      Home
    </Grid>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
}));
