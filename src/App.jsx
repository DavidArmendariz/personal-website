import React from 'react';
import SideBar from './components/SideBar';
import { Grid, Hidden } from '@material-ui/core';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Grid container>
      <Hidden smDown>
        <Grid item xs={3}>
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
  );
}

export default App;
