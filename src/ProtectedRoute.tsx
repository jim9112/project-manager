import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './context/UserContext';

interface Props {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { user }: any = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          console.log(user);
          return <Component />;
        } else {
          console.log(user);
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
