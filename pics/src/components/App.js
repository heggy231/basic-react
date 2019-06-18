import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  // if expected to img in array default it empty array
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term },
    });
    // console.log(response.data.results);
    // console.log("this keyword", this); // this keyword should now point to App class
    // console.log("this: ", this);
    console.log("response: ", response);
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar 
          onSubmit={this.onSearchSubmit}
        />
        {/* Found: {this.state.images.length} */}
        {/* passing down images prop to child imageList */}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;

