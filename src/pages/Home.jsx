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
          <Typography variant="h5">
            <Box fontWeight="fontWeightLight">
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
        <Grid container item>
          <Grid item>
            <Button startIcon={<WorkIcon />} className={classes.viewPortfolio}>
              <Link className={classes.link} to="/portfolio">
                View portfolio
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    </Grid>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(4) },
  viewPortfolio: {
    backgroundColor: colors.sidebar,
    marginTop: theme.spacing(4),
    color: colors.white,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&:hover': {
      backgroundColor: `${colors.sidebar}50`,
    },
  },
  link: {
    color: colors.white,
  },
  divider: {
    margin: theme.spacing(4),
  },
}));
