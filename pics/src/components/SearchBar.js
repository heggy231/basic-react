import React from 'react';

class SearchBar extends React.Component {
  // control vs uncontrolled using state makes it control
  state = {
    // since state is controlling the data we can set the 
    //  initialization value.
    term: 'Enter your question',
  };

  // onInputClick() {
  //   console.log("Input was clicked!")
  // }
  //  REMEMBER to add onClick={ this.onInputClick} 
  //   inside of input tag to get this function working

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

              - onChange: different events has different prop names, this case prop name: onChange
              - refactoring to controlled element vs Uncontrolled Click event earlier
              
              - value: whatever we assign to value the input will show
            */}
            <input 
              type="text" 
              value={this.state.term}
              // change user input force toUpperCase()
              // onChange={ (e) => this.setState({ term: e.target.value.toUpperCase() }) }
              onChange={ (e) => this.setState({ term: e.target.value }) }
            />
          </div>

        </form>
      </div>
    );
  }
}

export default SearchBar;