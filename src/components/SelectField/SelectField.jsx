import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class SelectField extends PureComponent {
    render() {
        const { error, value, onChange, defaultText, options}=this.props;
        return (
            <div>
             <h3>Select the game you Play: </h3>
            {!error && (<select 
                          value={value || defaultText} 
                          onChange={(e) => onChange("sport",e.target.value)}
                          >
                         {options.map((option,index) => {
                          return <option key={index} value={option.value}>{option.label}</option>
                         })}
                        </select>)
            }
            </div>
        )
    }
}

SelectField.propTypes = {
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
};

export default SelectField;
