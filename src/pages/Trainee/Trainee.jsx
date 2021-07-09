import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import TraineeDetail from './TraineeDetail';
import TraineeList from './TraineeList';

export default class Trainee extends PureComponent {
  render() {
    const { match: { path: Path } } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${Path}`} component={TraineeList} />
          <Route exact path={`${Path}/:id`} component={TraineeDetail} />
        </Switch>
      </div>
    );
  }
}

Trainee.propTypes = {
  match: PropTypes.shape().isRequired,
};
