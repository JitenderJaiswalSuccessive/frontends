import React, { PureComponent } from 'react';
import style from './style';
import {
  TextField, SelectField, RadioGroup, Button,
} from '../../components';
import { footballEntries, cricketEntries, sportSelect } from '../../configs/constants';
import { Inputschema } from '../../validations/InputDemoValidation';

export default class InputDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
      isTouched: {
        name: false,
        sport: false,
        role: false,
      },
      hasError: {
        name: false,
        sport: false,
        role: false,
      },
      err: {},
    };
  }

  handleInputChange = (field, value) => {
    const { isTouched } = this.state;

    if (field === 'cricket') {
      this.setState({
        [field]: value,
        football: '',
        isTouched: { ...isTouched, role: true },
      });
    } else if (field === 'football') {
      this.setState({
        [field]: value,
        cricket: '',
        isTouched: { ...isTouched, role: true },
      });
    } else {
      this.setState({
        [field]: value,
        football: '',
        cricket: '',
        isTouched: { ...isTouched, [field]: true },
        err: {},
      });
    }
  }

  onBlurHandler = (field) => () => {
    const {
      name,
      sport,
      football,
      cricket,
      hasError,
      err,
    } = this.state;
    const allErrors = { ...err };
    const role = football || cricket;

    Inputschema.validate({ name, sport, role }, { abortEarly: false })
      .then(() => {
        hasError[field] = false;
        allErrors[field] = '';
        this.setState({ err: {}, hasError });
      })
      .catch((error) => {
        error.inner.forEach((element) => {
          if (element.path === field) {
            allErrors[field] = element.message;
            hasError[field] = true;
          }
        });
        this.setState({ err: allErrors, hasError });
      });
  }

  hasError = () => {
    const { hasError, isTouched } = this.state;
    let check = 0;
    let touchCheck = 0;
    Object.keys(hasError).forEach((element) => {
      if (!hasError[element]) check += 1;
    });
    Object.keys(isTouched).forEach((element) => {
      if (isTouched[element]) touchCheck += 1;
    });
    return !(check === 3 && touchCheck === 3);
  }

  cancel = () => {
    this.setState({
      name: '',
      sport: '',
      cricket: '',
      football: '',
      isTouched: {
        name: false,
        sport: false,
        role: false,
      },
      hasError: {
        name: false,
        sport: false,
        role: false,
      },
      err: {},
    }, () => {
      // eslint-disable-next-line no-console
      console.log(this.state);
    });
  }

  submit = () => {
    // eslint-disable-next-line no-console
    console.log(this.state);
  }

  render() {
    const {
      name, sport, cricket, football, err,
    } = this.state;

    const sportVal = (sport === 'cricket') ? cricketEntries : footballEntries;
    const RadioVal = cricket || football;
    return (
      <>
        <div>
          <h3>Name</h3>
          <TextField
            value={name}
            onChange={(e) => this.handleInputChange('name', e.target.value)}
            onBlur={this.onBlurHandler('name')}
            err={err.name}
          />
        </div>
        <div>
          <h3>Select the game you want to play</h3>
          <SelectField
            value={sport}
            options={sportSelect}
            onChange={(e) => this.handleInputChange('sport', e.target.value)}
            onBlur={this.onBlurHandler('sport')}
            err={err.sport}
          />
        </div>
        {sport && (
          <div style={style.base}>
            <h3>What do you do?</h3>
            <RadioGroup
              value={RadioVal}
              options={sportVal}
              onChange={(e) => this.handleInputChange(sport, e.nativeEvent.target.value)}
              onBlur={this.onBlurHandler('role')}
              err={err.role}
            />
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button
            style={style.button}
            value="Cancel"
            onClick={this.cancel}
          />
          <Button
            disabled={this.hasError()}
            style={style.buttonEn}
            value="Submit"
            onClick={this.submit}
          />
        </div>
      </>
    );
  }
}
