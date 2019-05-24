import React from 'react';

const getSeason = (lat, month) => {
  // [3-8] northern > winter, southern > summer, we are in summer months 3-9
  if (month > 2 && month < 9) {
    // if we are in southern lat > 0 return summer otherwise; lat < 0 (northern) winter
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  // lat={this.state.lat} 
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'winter' ? 'Burr, it is chilly!' : 'Let\'s hit the beach!'

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )


};

export default SeasonDisplay;