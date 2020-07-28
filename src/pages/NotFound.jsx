import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      Not Found
    </Grid>
  );
};

export default NotFound;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
}));
