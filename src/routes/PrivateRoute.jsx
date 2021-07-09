import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { PrivateLayout } from '../layouts';

function PrivateRoute({ component: Component, ...rest }) {
  if (!localStorage.getItem('jwtToken')) return <Redirect to="/login" />;
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(matchProps) => (
        <PrivateLayout>
          <Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...matchProps}
          />
        </PrivateLayout>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
