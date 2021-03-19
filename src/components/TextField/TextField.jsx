import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { error as err, valid as val } from './style';

export default class TextField extends PureComponent {
  render() {
    const { value, error, disabled } = this.props;
    return (
      <div>
        { value && <input style={val} value={value} /> }
        {disabled && <input style={{ width: '100%', height: '10px' }} value="Disabled Input" disabled={disabled} />}
        {error && <input style={err} value={error} />}
      </div>
    );
  }
}
TextField.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
