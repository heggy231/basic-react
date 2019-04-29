// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return (
  <div>
    <div>
      {/* label attribute for="name" associate to input with id="name" 
      what this does when click on label > cursor goes inside name input field  */}
      <label class="label" for="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style="background-color: blue; color: white;">Submit</button>
    </div>
  </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);