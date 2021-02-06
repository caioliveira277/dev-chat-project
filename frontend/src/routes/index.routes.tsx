import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as Pages from 'pages';
import { Session } from 'contexts';

const Routes: React.FC = () => {
  return (
    <Router>
      <Session.Provider>
        <Switch>
            <Route exact path="/login" component={Pages.Login} />
            <Route exact path="/signin" component={Pages.Signin} />
            <Route exact path="/chat" component={Pages.Chat} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
        </Switch>
      </Session.Provider>
  </Router>
  );
}

export default Routes;