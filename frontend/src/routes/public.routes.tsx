import React from "react";
import {
  Route,
} from "react-router-dom";
import * as Pages from 'pages';

const PublicRoutes: React.FC = () => {
  return (
    <Route path="/" component={Pages.Login} />
  );
}

export default PublicRoutes;