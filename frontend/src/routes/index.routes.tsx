import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import * as Pages from 'pages';
import { Session } from 'contexts';
import PrivateRoute from './private.routes';

const Routes: React.FC = () => {
  return (
    <Router>
      <Session.Provider>
        <Switch>
            <Route exact path='/login' component={Pages.Login} />
            <Route exact path='/signin' component={Pages.Signin} />
            <PrivateRoute exact path='/chat'>
              <Pages.Chat />
            </PrivateRoute>
            <Route path='*'>
              <Redirect to='/login' />
            </Route>
        </Switch>
      </Session.Provider>
  </Router>
  );
}

export default Routes;