import React, { PureComponent } from 'react';
import  {TextField, SelectField, RadioGroup  }  from '../../components';

export default class InputFieldDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          sport: '',
          Cricket: '',
          Football: '',
        };
      }
    handleInputChange = (field, value) => {
        if(value === "Cricket" || field === "Cricket"){
            this.setState({
                [field]: value,
                Football: '',
            });
        }
        else if(value === "Football" || field === "Football"){
            this.setState({
                [field]: value,
                Cricket: '',
            });
        }else {
            this.setState({
                [field]: value,
                Football: '',
                Cricket: '',
            });
        }
    }
    render() {
        console.log(this.state);
        const { name, sport} = this.state;
        return (
            <div>
                <TextField 
                   error={''} 
                   value={name} 
                   onChange={this.handleInputChange} 
                />
                <SelectField 
                   error={''} 
                   value={sport} 
                   onChange={this.handleInputChange}
                   defaultText={'Select'}
                   options={[{'label':'Select','value':''},{'label':'Cricket','value':'Cricket'},{'label':'Football','value':'Football'}]} 
                /> 
               {sport === "Cricket" && (<RadioGroup 
                   error={''} 
                   value={sport} 
                   onChange={this.handleInputChange}
                  options={[{'label':'wicket','value':'Wicket Keeper'},{'label':'batsman','value':'Batsman'},{'label':'bowler','value':'Bowler'},{'label':'allRounder','value':'All Rounder'}]} 
                />)}
                {sport === "Football" && (<RadioGroup 
                   error={''} 
                   value={sport} 
                   onChange={this.handleInputChange}
                  options={[{'label':'defender','value':'Defender'},{'label':'striker','value':'Striker'},{'label':'bowler','value':'Bowler'}]} 
                />)}
            </div>
        )
    }
}
