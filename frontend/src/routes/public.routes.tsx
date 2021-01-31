import React from "react";
import {
  Route,
} from "react-router-dom";
import * as Pages from 'pages';

const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route exact path="/login" component={Pages.Login} />
      <Route exact path="/signin" component={Pages.Signin} />
    </>
  );
}

export default PublicRoutes;