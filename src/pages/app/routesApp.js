import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard';
import Form from './form';

const RoutesApp = () => {
  return(
    <Switch>
      <Route exact path='/app' component={Dashboard}/>
      <Route exact path='/app/form' component={Form}/>
    </Switch>
  );
}

export default RoutesApp;