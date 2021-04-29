import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../service/history';
import { isAuthenticated } from '../service/auth';
import Login from '../pages/login';
import App from '../pages/app';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }}/>
      )
    }
  />
);
 
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Login}/>
      <PrivateRoute path='/app' component={App}/>
    </Switch>
  </Router>
);

export default Routes;