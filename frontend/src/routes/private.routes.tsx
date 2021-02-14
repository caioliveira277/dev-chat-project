import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { Session } from 'contexts';

const PrivateRoute: React.FC<RouteProps> = ({ children, exact, path }) => {
  const { authenticated } = useContext(Session.Context);

  return (
    <Route
      exact={exact}
      path={path}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;