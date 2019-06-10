import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

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
  // seasonConfig[season] >>> { text, iconName }
  // {text: "hot time", iconName: "sun"}
  const { text, iconName } = seasonConfig[season];  // seasonConfig["summer"] >> text = 'Lets hit the beach', iconName = 'sun'
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );


};

export default SeasonDisplay;