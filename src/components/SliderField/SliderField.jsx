import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { getRandomNumber, getRoundRobin } from '../../lib/utils/math';

export default class SliderField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    const { random, duration } = this.props;
    setInterval(() => {
      if (random) {
        this.setState({ index: getRandomNumber(6) });
      } else {
        const { index } = this.state;
        this.setState({ index: getRoundRobin(6, index) });
      }
    }, duration);
  }

  render() {
    const {
      altText, banners, defaultBanner, height,
    } = this.props;

    const { index } = this.state;
    return (
      <div>
        <img
          src={banners ? banners[index] : defaultBanner}
          alt={altText}
          height={height}
        />
      </div>
    );
  }
}

SliderField.propTypes = {
  altText: PropTypes.string.isRequired,
  defaultBanner: PropTypes.string.isRequired,
  banners: PropTypes.arrayOf.isRequired,
  duration: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  random: PropTypes.bool.isRequired,
};
