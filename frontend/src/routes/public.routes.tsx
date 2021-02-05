import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import * as Pages from 'pages';
import { Session } from 'contexts';

const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
      <Session.Provider>
        <Route exact path="/login" component={Pages.Login} />
        <Route exact path="/signin" component={Pages.Signin} />
        <Route exact path="/chat" component={Pages.Chat} />
      </Session.Provider>
    </>
  );
}

export default PublicRoutes;