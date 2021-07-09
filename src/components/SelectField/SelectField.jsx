import React from 'react';
import PropTypes from 'prop-types';
import style from './Style';

const SelectField = ({
  onChange, value, defaultText, options, err, onBlur,
}) => {
  const error = (err.length) ? style.err : {};
  return (
    <>
      <select
        onChange={onChange}
        value={value}
        style={{ ...style.base, ...error }}
        error={err}
        onBlur={onBlur}
      >
        <option key="" value="">{defaultText}</option>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {(err.length) ? <p style={{ ...error }}>{err}</p> : '' }
    </>
  );
};

SelectField.propTypes = {
  defaultText: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  err: PropTypes.string,
  onBlur: PropTypes.func,
};
SelectField.defaultProps = {
  defaultText: 'Select Field',
  onChange: () => {},
  options: [],
  value: '',
  err: '',
  onBlur: () => {},
};
export default SelectField;
