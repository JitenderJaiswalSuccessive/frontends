import React, { PureComponent } from 'react';
import {
  Button, InputAdornment, Grid, Paper, TextField,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LogInSchema } from '../../validations/loginValidation';

const style = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 400,
  },
  button: {
    background: 'purple',
    color: 'white',
  },
  disable: {
    background: 'lightgray',
    color: 'gray',
  },
});

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.initialValues = {
      email: '',
      password: '',
    };
  }

  onSubmit = (values) => {
    const { email, password } = values;
    const { history } = this.props;
    this.setState({
      email,
      password,
    });
    localStorage.setItem('jwtToken', 'jeet');
    history.push('/trainee');
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state);
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <Grid className={classes.root}>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <Grid item xs={12} container justify="center">
                <LockIcon color="secondary" />
              </Grid>
              <Grid item xs={12} container justify="center">
                <h1 style={{ fontFamily: 'fantasy' }}>Login</h1>
              </Grid>
              <Formik
                initialValues={this.initialValues}
                onSubmit={this.onSubmit}
                validationSchema={LogInSchema}
              >
                {(props) => (
                  <Form>
                    <Grid item xs={12} style={{ margin: 'auto' }} container justify="center" spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          name="email"
                          label="Email Address"
                          fullWidth
                          variant="outlined"
                          value={props.values.email}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          helperText={props.touched.email ? props.errors.email : ''}
                          error={props.touched.email && Boolean(props.errors.email)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="password"
                          label="Password"
                          fullWidth
                          variant="outlined"
                          value={props.values.password}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          helperText={props.touched.password ? props.errors.password : ''}
                          error={props.touched.password && Boolean(props.errors.password)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <VisibilityOffIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {(props.isValid && props.dirty) && (
                          <Button type="submit" className={classes.button} fullWidth disabled={!(props.isValid && props.dirty)}>
                            SIGN IN
                          </Button>
                        )}
                        {!(props.isValid && props.dirty) && (
                          <Button type="submit" className={classes.disable} fullWidth disabled={!(props.isValid && props.dirty)}>
                            SIGN IN
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.instanceOf({}).isRequired,
  history: PropTypes.shape().isRequired,
};

export default withStyles(style)(Login);
