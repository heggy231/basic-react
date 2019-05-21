import React from 'react';

const getSeason = (lat, month) => {
  // [3-8] northern > winter, southern > summer, we are in summer months 3-9
  if (month > 2 && month < 9) {
    // if we are in southern lat > 0 return summer otherwise; lat < 0 (northern) winter
    return lat > 0 ? 'summer' : 'winter';
  } 
}

const SeasonDisplay = (props) => {
  // lat={this.state.lat} 
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  return <div>Season Display: </div>;
};

export default SeasonDisplay;