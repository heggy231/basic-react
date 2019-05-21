import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = { 
    lat: null, 
    errorMessage: '' 
  };

// componentDidMount() only gets called once
  componentDidMount() {
    // console.log('My component was rendered to the screen.');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), 
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it re-rendered!');
  }
  // React requires we have to define render method!! return JSX
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));