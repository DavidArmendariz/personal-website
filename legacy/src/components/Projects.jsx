import React from 'react';
import { Grid, Card, makeStyles, CardContent } from '@material-ui/core';
import { projects } from '../information/projects';

const Projects = ({ type }) => {
  const classes = useStyles();
  const data = projects.filter((project) => project.type.includes(type));
  return (
    <Grid container>
      {data.map((project, index) => (
        <Grid lg={4} key={index} container item direction="column">
          <Card className={classes.card}>
            <CardContent>
              <Grid item>{project.title}</Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
}));
