import React from 'react';
import Slider from './Slider';

const sliders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
  slider => <h1>slider</h1>
);

const App = () => (
  <main>
    <div className="container">
      <Slider
        width={200}
        height={100}
        showCount={3}
        sliders={sliders}
        prevButtonTitle="prev"
        nextButtonTitle="next"
      />
    </div>
  </main>
);

export default App();
