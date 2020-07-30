import React, { Fragment } from 'react';
import { skills } from '../information/skills';
import { Grid, makeStyles } from '@material-ui/core';

const SkillsContainer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {skills.map((skill) => (
        <Grid container direction="column">
          <Grid item>
            <img
              className={classes.image}
              src={skill.image}
              alt={skill.title}
            />
          </Grid>
          <Grid className={classes.title} item>
            {skill.title}
          </Grid>
          <Grid className={classes.description} item>
            {skill.description}
          </Grid>
        </Grid>
      ))}
    </Fragment>
  );
};

export default SkillsContainer;

const useStyles = makeStyles((theme) => ({
  image: {
    height: 50,
    width: 50,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: theme.spacing(2),
    lineHeight: 'normal',
  },
}));
