import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { AuthLayout } from '../layouts';

const AuthRoute = ({ component: Component, ...rest }) => {
  if (localStorage.getItem('jwtToken')) return <Redirect to="/trainee" />;
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(matchProps) => (
        <AuthLayout>
          <Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...matchProps}
          />
        </AuthLayout>
      )}
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
export default AuthRoute;
