import React, { Fragment } from 'react';
import SideBar from './components/SideBar';
import { Grid, Hidden, makeStyles } from '@material-ui/core';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import CustomAppBar from './components/CustomAppBar';
import Resume from './pages/Resume';

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Hidden mdUp>
        <Grid container>
          <CustomAppBar />
        </Grid>
      </Hidden>
      <Grid container className={classes.root}>
        <Hidden smDown>
          <Grid item>
            <SideBar />
          </Grid>
        </Hidden>
        <Grid item>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'nowrap',
  },
}));
