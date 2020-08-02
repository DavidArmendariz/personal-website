import React from 'react';
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
    <Grid id="grid-root" container direction="column">
      <Hidden mdUp>
        <Grid item className={classes.appBar}>
          <CustomAppBar />
        </Grid>
      </Hidden>
      <Grid container item className={classes.root}>
        <Hidden smDown>
          <Grid item>
            <SideBar />
          </Grid>
        </Hidden>
        <Grid item className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'nowrap',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
  appBar: {
    width: '100vw',
  },
  content: {
    width: '100%',
  },
}));
