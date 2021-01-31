import React from 'react';
import PublicRoutes from './public.routes';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <PublicRoutes />
      </Switch>
  </Router>
  );
}

export default Routes;