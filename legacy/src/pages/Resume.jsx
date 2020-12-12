import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const Resume = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      Resume
    </Grid>
  );
};

export default Resume;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));
