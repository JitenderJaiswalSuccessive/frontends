import React, { PureComponent } from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  TextField, NativeSelect, InputBase, RadioGroup, FormControlLabel, Radio, Grid,
} from '@material-ui/core';
// import  {TextField, SelectField, RadioGroup  }  from '../../components';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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
      if (value === 'Cricket' || field === 'Cricket') {
        this.setState({
          [field]: value,
          Football: '',
        });
      } else if (value === 'Football' || field === 'Football') {
        this.setState({
          [field]: value,
          Cricket: '',
        });
      } else {
        this.setState({
          [field]: value,
          Football: '',
          Cricket: '',
        });
      }
    }

    render() {
      // eslint-disable-next-line no-console
      console.log(this.state);
      const { name, sport } = this.state;
      return (
        <Grid container xs={12} spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              vaue={name}
              variant="outlined"
              onChange={(e) => this.handleInputChange('name', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <NativeSelect
              fullWidth
              id="demo-customized-select-native"
              value={sport}
              onChange={(e) => this.handleInputChange('sport', e.target.value)}
              input={<BootstrapInput />}
            >
              <option value="" disabled>Select</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
            </NativeSelect>
          </Grid>
          <Grid item xs={12}>
            {sport === 'Cricket' && (
              <RadioGroup name="sport">
                <FormControlLabel value="Wicket Keeper" onChange={(e) => this.handleInputChange('wicket', e.target.value)} control={<StyledRadio />} label="Wicket Keeper" />
                <FormControlLabel value="Batsman" onChange={(e) => this.handleInputChange('batsman', e.target.value)} control={<StyledRadio />} label="Batsman" />
                <FormControlLabel value="Bowler" onChange={(e) => this.handleInputChange('bowler', e.target.value)} control={<StyledRadio />} label="Bowler" />
                <FormControlLabel value="All Rounder" onChange={(e) => this.handleInputChange('allRounder', e.target.value)} control={<StyledRadio />} label="All Rounder" />
              </RadioGroup>
            )}
            {sport === 'Football' && (
              <RadioGroup name="sport">
                <FormControlLabel value="Defender" onChange={(e) => this.handleInputChange('defender', e.target.value)} control={<StyledRadio />} label="Defender" />
                <FormControlLabel value="Striker" onChange={(e) => this.handleInputChange('striker', e.target.value)} control={<StyledRadio />} label="Striker" />
                <FormControlLabel value="Bowler" onChange={(e) => this.handleInputChange('bowler', e.target.value)} control={<StyledRadio />} label="Bowler" />
              </RadioGroup>
            )}
          </Grid>
        </Grid>
      );
    }
}
