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
  console.log('Protected route', user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          console.log('user verified');
          return <Component {...props} />;
        } else {
          console.log('user not verified', user);
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
