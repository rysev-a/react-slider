import React from 'react';

const SliderContainer = ({ width, height, shift, sliders, children }) => (
  <div
    className="slider-container"
    style={{
      width: sliders.length * width,
      height: height,
      left: shift * width,
    }}>
    {children}
  </div>
);

export default SliderContainer;
