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
            <label>Image Search</label>
            {/* when refer to this.onInputChange remember to leave out () */}
            <input type="text" onChange={this.onInputChange} />
          </div>

        </form>
      </div>
    );
  }
}

export default SearchBar;