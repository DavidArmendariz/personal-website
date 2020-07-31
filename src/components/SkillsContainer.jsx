import React, { Fragment } from 'react';
import { skills } from '../information/skills';
import { Grid, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const SkillsContainer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {skills.map((skill) => (
        <Grid lg={4} container item direction="column">
          <Card className={classes.card}>
            <CardContent>
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
            </CardContent>
          </Card>
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
    lineHeight: 2,
    textAlign: 'justify',
  },
  card: {
    height: '100%',
  },
}));
