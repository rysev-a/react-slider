import React from 'react';

const SliderButtons = ({ next, prev, prevButtonTitle, nextButtonTitle }) => (
  <div className="slider-buttons">
    <div className="slider-buttons__prev" onClick={prev}>
      {prevButtonTitle}
    </div>
    <div className="slider-buttons__next" onClick={next}>
      {nextButtonTitle}
    </div>
  </div>
);

export default SliderButtons;
