import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Divider,
} from '@material-ui/core';
import * as colors from '../theme/colors';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import SkillsContainer from '../components/SkillsContainer';

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h4">
            <Box fontWeight="fontWeightMedium">David Armendáriz</Box>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            <Box
              className={classes.verticalMargin}
              fontWeight="fontWeightLight">
              Mathematician & Software Developer
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            I am a mathematician who transitioned to the Software Development
            industry. I am always learning new things and teaching them whenever
            I can. I also have a strong analytical and mathematical background.
          </Typography>
        </Grid>
        <Grid container item spacing={4}>
          <Grid item>
            <Button startIcon={<WorkIcon />} className={classes.viewPortfolio}>
              <Link className={classes.link} to="/portfolio">
                View portfolio
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<DescriptionIcon />}
              className={classes.viewResume}>
              <Link className={classes.link} to="/resume">
                View resume
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item>
            <Divider orientation="vertical" className={classes.greenDivider} />
          </Grid>
          <Grid item>
            <Typography variant="h5">
              <Box fontWeight="fontWeightBold">What I do</Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.verticalMargin} container>
          <Box lineHeight={2}>
            I have 1.5 years of experience as a mathematician and software
            developer. My main skill is to learn things extremely fast, no
            matter what the subject is. Below is a quick overview of my main
            technical skill sets and technologies I have used during my career.
          </Box>
        </Grid>
        <Grid container spacing={4}>
          <SkillsContainer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(4) },
  viewPortfolio: {
    backgroundColor: colors.green,
    marginTop: theme.spacing(4),
    color: colors.white,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&:hover': {
      backgroundColor: `${colors.green}50`,
    },
  },
  viewResume: {
    backgroundColor: colors.gray,
    marginTop: theme.spacing(4),
    color: colors.white,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&:hover': {
      backgroundColor: `${colors.gray}50`,
    },
  },
  link: {
    color: colors.white,
  },
  divider: {
    margin: theme.spacing(4),
  },
  greenDivider: {
    backgroundColor: colors.green,
    width: 5,
  },
  verticalMargin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));
