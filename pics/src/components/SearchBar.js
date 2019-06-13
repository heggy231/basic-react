import React from 'react';

class SearchBar extends React.Component {
  // when user types call this method
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">    
        <form className="ui form">
          <div className="field">
            {/* label for the image search: Image Search */}
            <label>Image Search</label>
            {/* when refer to this.onInputChange remember to leave out () 
              We do mpt put () >> when we pass a callback function to an event handler
              - call .onInputChange() when user types anything on field which event.target.value get the info.
            */}
            <input type="text" onChange={this.onInputChange} />
          </div>

        </form>
      </div>
    );
  }
}

export default SearchBar;