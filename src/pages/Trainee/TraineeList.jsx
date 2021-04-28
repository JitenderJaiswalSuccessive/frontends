import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import trainees from './data/trainee';

export default class TraineeList extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          {trainees.map((trainee) => (
            <li key={trainee.id}>
              <Link to={`/trainee/${trainee.id}`}>{trainee.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
