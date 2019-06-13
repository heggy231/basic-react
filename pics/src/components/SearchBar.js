import React from 'react';

class SearchBar extends React.Component {
  // when user types call this method
  onInputChange(event) {
    console.log("######## event object: #######", event);
    console.log(event.target.value);
  }

  onInputClick() {
    console.log('Input was clicked');
  }

  handleSubmit(e) {
    console.log('form was submitted');
    console.log(e.target.value);
    debugger;
  }

  render() {
    return (
      <div className="ui segment">    
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            {/* label for the image search: Image Search */}
            <label>Image Search</label>
            {/* when refer to this.onInputChange remember to leave out () 
              We do mpt put () >> when we pass a callback function to an event handler
              - call .onInputChange() when user types anything on field which event.target.value get the info.

              - onChange: different events has different prop names, this case prop name: onChange
            */}
            {/* <input type="text" onChange={this.onInputChange} onClick={this.onInputClick} /> */}
            <input type="text" placeholder="You got it toyota" />
            <input type="submit" value="submit" />
          </div>

        </form>
      </div>
    );
  }
}

export default SearchBar;