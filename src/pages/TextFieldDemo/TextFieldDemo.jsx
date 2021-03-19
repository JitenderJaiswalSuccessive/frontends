import { React, PureComponent } from 'react';
import { TextField } from '../../components';

export default class TextFieldDemo extends PureComponent {
  render() {
    return (
      <div className="TextFieldDemo">
        <div>
          <b>This is disabled Input</b>
          <TextField disabled />
        </div>
        <div>
          <b>A Valid Input</b>
          <TextField value="Accessible" />
        </div>
        <div>
          <b>A Input with Error</b>
          <TextField error="101" />
          <p style={{ color: 'red', margin: '0' }}>Could not be greater than</p>
        </div>
      </div>
    );
  }
}
