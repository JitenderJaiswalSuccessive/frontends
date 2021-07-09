import React from 'react';
import { Slider } from '../../components';
import { bannersArray } from '../../configs/constants';

const SliderFieldDemo = () => (
  <>
    <Slider banners={bannersArray} />
  </>
);
export default SliderFieldDemo;
