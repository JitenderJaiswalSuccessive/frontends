import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const RadioField = ({
  onChange, value, options, err, onBlur,
}) => {
  const error = (err.length) ? style.err : {};
  return (
    <>
      {options.map((option) => (
        <label htmlFor={option.label} key={option.label}>
          <input
            type="radio"
            id={option.label}
            value={option.label}
            checked={option.label === value}
            onChange={onChange}
            error={err}
            onBlur={onBlur}
            style={{ ...style.base, ...error }}
          />
          {option.label}
        </label>
      ))}
      {(err.length) ? <p style={{ ...error }}>{err}</p> : '' }
    </>
  );
};

RadioField.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  err: PropTypes.string,
  onBlur: PropTypes.func,
};
RadioField.defaultProps = {
  onChange: () => {},
  options: [],
  value: '',
  err: '',
  onBlur: () => {},
};
export default RadioField;
