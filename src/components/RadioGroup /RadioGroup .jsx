import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class RadioGroup  extends PureComponent {
    render() {
        const { error, value, onChange, options}=this.props;
        console.log("value",value);
        return (
            <div>
                <h3>What you Do?</h3>
                {!error && (
                    options.map((option,index) => {
                    return (<div key={index}>
                             <label htmlFor={option.label}>
                            <input 
                              type="radio" 
                              id={option.label} 
                              name="sport" 
                              value={option.value} 
                              onChange={(e) => onChange(value,e.target.value)}/>
                              {option.value}
                              </label>
                             </div>)
                    })
                )}
            </div>
        )
    }
}

RadioGroup.propTypes = {
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RadioGroup; 
