import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  // component: React.ComponentType;
  component: any;
  user: {};
}

const ProtectedRoute: React.FC<Props> = ({
  component: Component,
  user,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
