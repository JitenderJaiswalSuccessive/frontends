import { React, PureComponent } from 'react';
import { Grid, TextField } from '@material-ui/core';
import CLOUD_IMAGE from './images/cloud.jpg';
import DEFAULT_BANNER_IMAGE from './images/default.png';
import DNS_SERVER_IMAGE from './images/dns-server.png';
import FULL_STACK_WEB_DEVELOPMENT_IMAGE from './images/full-stack-web-development.jpg';
import JS_IMAGE from './images/js.jpg';
import LOAD_BALANCER_IMAGE from './images/load-balancer.png';

export default class TextFieldDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      // eslint-disable-next-line no-constant-condition
      if (false) {
        this.setState({ index: this.getRandomNumber(6) });
      } else {
        const { index } = this.state;
        this.setState({ index: this.getRoundRobin(6, index) });
      }
    }, 2000);
  }

  getRandomNumber = (max) => (Math.floor(Math.random() * max))

  getRoundRobin = (total, current) => ((current + 1) % total)

  render() {
    const banners = [DEFAULT_BANNER_IMAGE, CLOUD_IMAGE, DNS_SERVER_IMAGE,
      FULL_STACK_WEB_DEVELOPMENT_IMAGE, LOAD_BALANCER_IMAGE, JS_IMAGE];
    const { index } = this.state;
    return (
      <Grid container spacing={3}>
        <Grid container justify="center" xs={12}>
          <img
            src={banners ? banners[index] : DEFAULT_BANNER_IMAGE}
            alt="Default Banner"
            height="200"
          />
        </Grid>
        <Grid item xs={12}>
          <b>This is disabled Input</b>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="Disabled Input"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <b>A Valid Input</b>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="Accessible"
            style={{ border: '1px solid orange' }}
          />
        </Grid>
        <Grid item xs={12}>
          <b>A Input with Error</b>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="101"
            error
          />
          <p style={{ color: 'red', margin: '0' }}>Could not be greater than</p>
        </Grid>
      </Grid>
    );
  }
}
