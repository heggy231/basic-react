import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


// functional const App = () => { return <div> }
// class based component
class App extends React.Component {
  onSearchSubmit(term) {
    // api end point url and config optional argument
    axios.get('https://api.unsplash.com/search/photos', {
      // https://unsplash.com/documentation#parameters-11
      // what happens with params adds to the end of url https://api.unsplash.com/search/photos?yourQueryTermValue  ex) https://api.unsplash.com/search/photos?car
      // Request Config for Axios https://github.com/axios/axios#request-config
      params: { query: term },
      // header doc https://unsplash.com/documentation#public-actions
      headers: {
        //Authorization: Client-ID YOUR_ACCESS_KEY
        Authorization: 'Client-ID c60a2d465519232c93936ce432ae69a1d052aa60ee8dc5b01a22919ef699590c'
      }
    // after asynch axios network request promise obj get passed, arrow function is cb invoked with data we got back splash api
    }).then((response) => {
      debugger;
      // console.log(response);
      console.log(response.data.results);
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;

