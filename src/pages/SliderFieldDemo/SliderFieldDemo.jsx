import React, { PureComponent } from 'react';
import CLOUD_IMAGE from '../../images/cloud.jpg';
import DEFAULT_BANNER_IMAGE from '../../images/default.png';
import DNS_SERVER_IMAGE from '../../images/dns-server.png';
import FULL_STACK_WEB_DEVELOPMENT_IMAGE from '../../images/full-stack-web-development.jpg';
import JS_IMAGE from '../../images/js.jpg';
import LOAD_BALANCER_IMAGE from '../../images/load-balancer.png';
import { SliderField } from '../../components';

export default class SliderFieldDemo extends PureComponent {
  render() {
    const imagesarray = [DEFAULT_BANNER_IMAGE, CLOUD_IMAGE, DNS_SERVER_IMAGE,
      FULL_STACK_WEB_DEVELOPMENT_IMAGE, LOAD_BALANCER_IMAGE, JS_IMAGE];
    return (
      <div>
        <SliderField
          altText="Default Banner"
          banners={imagesarray}
          defaultBanner={DEFAULT_BANNER_IMAGE}
          duration={2000}
          height={200}
          random={false}
        />
      </div>
    );
  }
}
