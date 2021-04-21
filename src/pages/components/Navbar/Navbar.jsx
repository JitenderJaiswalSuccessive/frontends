import React, { PureComponent } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';

export default class Navbar extends PureComponent {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Trainee Portal
            </Typography>
            <Button color="inherit">TRAINEE</Button>
            <Button color="inherit">TEXTFIELD DEMO</Button>
            <Button color="inherit">INPUT DEMO</Button>
            <Button color="inherit">CHILDREN DEMO</Button>
            <Button color="inherit">LOGOUT</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
