import React, { PureComponent } from 'react';
import { AddDialog } from './components';
import { Navbar } from '../components/Navbar';

export default class Trainee extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <AddDialog />
      </div>
    );
  }
}
