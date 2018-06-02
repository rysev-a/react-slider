import React from 'react';
import SliderContainer from './SliderContainer';
import SliderItem from './SliderItem';
import SliderButtons from './SliderButtons';

import './style.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shift: 0 };
  }

  next = () => this.setState({ shift: this.state.shift + 1 });
  prev = () => this.setState({ shift: this.state.shift - 1 });

  render() {
    const {
      width,
      height,
      showCount,
      sliders,
      prevButtonTitle,
      nextButtonTitle,
    } = this.props;

    return (
      <div className="slider-wrapper">
        <div className="slider" style={{ height, width: width * showCount }}>
          <SliderContainer {...this.props} shift={this.state.shift}>
            {sliders.map((slider, i) => (
              <SliderItem key={i} slider={slider} {...this.props} />
            ))}
          </SliderContainer>
        </div>
        <SliderButtons
          next={this.next}
          prev={this.prev}
          nextButtonTitle={nextButtonTitle}
          prevButtonTitle={prevButtonTitle}
        />
      </div>
    );
  }
}

export default Slider;
