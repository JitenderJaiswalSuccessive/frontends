import React, { PureComponent } from 'react';

export default class NoMatch extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Not Found</h1>
        <div>Seems like the page you are looking after does not exist.</div>
      </div>
    );
  }
}
