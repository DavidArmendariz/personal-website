import React, { Fragment } from 'react';
import SideBar from './components/SideBar';
import { Grid, Hidden } from '@material-ui/core';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import CustomAppBar from './components/CustomAppBar';

function App() {
  return (
    <Fragment>
      <Hidden mdUp>
        <Grid container>
          <CustomAppBar />
        </Grid>
      </Hidden>
      <Grid container>
        <Hidden smDown>
          <Grid item>
            <SideBar />
          </Grid>
        </Hidden>
        <Grid item>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
