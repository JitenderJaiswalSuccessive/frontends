import React, { PureComponent } from 'react';

export default class Logout extends PureComponent {
  render() {
    localStorage.removeItem('jwtToken');
    return (
      <div>
        Logout!!!
      </div>
    );
  }
}
