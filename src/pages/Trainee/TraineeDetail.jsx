import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import trainees from './data/trainee';

export default class TraineeDetail extends PureComponent {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    const trainee = trainees.find((data) => data.id === id);
    return (
      <div>
        <Paper elevation={5}>
          <div style={{ display: 'flex', height: '150px' }}>
            <div style={{
              background: '#686666', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
              Thumbnail
            </div>
            <div style={{ flexGrow: 5, marginLeft: '15px' }}>
              <div><h3>{trainee.name}</h3></div>
              <div style={{ color: '#7b6d6d', marginBottom: '5px' }}>{moment(trainee.createdAt).format('ddd, MMMM Do YYYY, LTS')}</div>
              <div>{trainee.email}</div>
            </div>
          </div>
        </Paper>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/trainee">
            <Button variant="contained">Back</Button>
          </Link>
        </div>
      </div>
    );
  }
}

TraineeDetail.propTypes = {
  match: PropTypes.instanceOf({}).isRequired,
};
