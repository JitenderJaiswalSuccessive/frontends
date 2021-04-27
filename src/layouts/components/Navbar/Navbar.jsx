import React, { PureComponent } from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  linkStyle: {
    textDecoration: 'none',
    color: 'white',
    padding: 10,
    '&:hover': {
      backgroundColor: 'darkBlue',
    },
  },
  root: {
    marginBottom: 20,
  },
});

class Navbar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6">
              Trainee Portal
            </Typography>
            <Link to="/" className={classes.linkStyle}>TRAINEE</Link>
            <Link to="/text-field-demo" className={classes.linkStyle}>TEXTFIELD DEMO</Link>
            <Link to="/input-demo" className={classes.linkStyle}>INPUT DEMO</Link>
            <Link to="/children-demo" className={classes.linkStyle}>CHILDREN DEMO</Link>
            <Link to="/logout" className={classes.linkStyle}>LOGOUT</Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.instanceOf({}).isRequired,
};

export default withStyles(styles)(Navbar);
