import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      Portfolio
    </Grid>
  );
};

export default Portfolio;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
}));
