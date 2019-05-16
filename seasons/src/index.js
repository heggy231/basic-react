import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // define constructor > to initialize 
  constructor(props) {
    // ceremonial part when doing constructor function
    // super() calls for parent constructor function from React.Component 
    super(props);
    // This is only TIME we do direct assignment to this state
    this.state = {
      // sensible to assign null when we don't know what to assign
      lat: null, 
      errorMessage: ''
    };
    
  }

// componentDidMount() only gets called once
  componentDidMount() {
    // console.log('My component was rendered to the screen.');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), 
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it re-ßrendered!');
  }
  // React requires we have to define render method!! return JSX
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));