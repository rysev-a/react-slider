import React from 'react';

const SliderItem = ({ slider, width, height }) => (
  <div
    className="slider-item"
    key={slider}
    style={{ width: width, height: height }}>
    {slider}
  </div>
);

export default SliderItem;
