import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRandomNumber, getRoundRobin } from '../../lib/utils/math';
import { DEFAULT_BANNER_IMAGE } from '../../configs/constants';
// import DEFAULT_BANNER_IMAGE from '../../images/banners/default.png';
import { imageStyle } from './style';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    const { random, banners, duration } = this.props;
    const total = banners.length;
    this.interval = setInterval(() => {
      const { index } = this.state;
      const number = (random) ? getRandomNumber(total) : getRoundRobin(total, index);
      this.setState({ index: number });
    }, duration);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    const { index } = this.state;
    const {
      altText,
      banners,
      defaultBanner,
      height,
    } = this.props;
    const source = (banners.length) ? banners[index] : defaultBanner;

    return (
      <div style={imageStyle}>
        <img src={source} alt={altText} height={height} />
      </div>
    );
  }
}

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string),
  defaultBanner: PropTypes.string,
  height: PropTypes.number,
  random: PropTypes.bool,
  duration: PropTypes.number,
};
Slider.defaultProps = {
  altText: 'Not Available',
  banners: [],
  defaultBanner: DEFAULT_BANNER_IMAGE,
  duration: 2000,
  height: 200,
  random: false,
};

export default Slider;
