import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

export default class TextField extends PureComponent {
    render() {
        const{error, value, onChange}=this.props;
        return (
            <div>
                <h3>Name:</h3>
              {!error &&  
              (<input 
                 placeholder="Name" 
                 type="text" 
                 required 
                 value={value}
                 onChange={(e) => onChange("name",e.target.value)}
               />)}
            </div>
        )
    }
}

TextField.propTypes = {
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
  };
