import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const TextField = ({
  err, value, onChange, onBlur,
}) => {
  const error = (err.length) ? style.err : {};
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        value={value}
        style={{ ...style.base, ...error }}
        error={err}
        onBlur={onBlur}
      />
      {(err.length) ? <p style={{ ...error }}>{err}</p> : '' }
    </>
  );
};

TextField.propTypes = {
  err: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
TextField.defaultProps = {
  err: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
};
export default TextField;
