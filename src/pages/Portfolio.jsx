import React, { useState } from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import * as colors from '../theme/colors';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/TabPanel';
import Projects from '../components/Projects';

const Portfolio = () => {
  const classes = useStyles();
  const [projectType, setProjectType] = useState(0);

  const onTabChange = (_, newValue) => {
    console.log(newValue);
    setProjectType(newValue);
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid
        className={classes.header}
        item
        container
        direction="column"
        alignItems="center">
        <Grid item>
          <Typography className={classes.title}>Portfolio</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Welcome to my online portfolio! Here you will find projects where I
            have participated
          </Typography>
        </Grid>
        <Grid item>
          <Button className={classes.contactMe} startIcon={<ContactMailIcon />}>
            Contact me
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="column" alignItems="center">
        <Tabs value={projectType} onChange={onTabChange}>
          <Tab label="All" />
          <Tab label="Web Apps" />
          <Tab label="Mobile" />
          <Tab label="Backend" />
        </Tabs>
        <div className={classes.space}></div>
        <TabPanel value={projectType} index={0}>
          <Projects type="all" />
        </TabPanel>
        <TabPanel value={projectType} index={1}>
          <Projects type="webapp" />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default Portfolio;

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#FAFAFA',
  },
  title: {
    margin: 20,
    fontSize: 30,
    fontWeight: 700,
  },
  contactMe: {
    backgroundColor: colors.green,
    color: colors.white,
    margin: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&:hover': {
      backgroundColor: colors.greenWithOpacity,
    },
  },
  space: {
    margin: theme.spacing(3),
  },
}));
