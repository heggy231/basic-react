# basic-react

- tiny react app
https://codepen.io/heggy231/pen/ZZwZJa

class App extends React.Component {
  state = { styleOne: {}, styleTwo:{} };
  
  onMouseMove = (event) => {
    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY)
    })
  }
  // use method called render method
  render() {
    return (
      <div onMouseMove={this.onMouseMove}>
        <div className="panel" style={this.state.styleOne}/>
        <div className="panel" style={this.state.styleTwo}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

- pen setting babel, react, reactdom

1) install node on your machine
2) > npm install -g create-react-app
3) > create-react-app jsx

- Purpose of React
  * JS lib
  * ultimate purpose: show HTML content to users and handle user interaction

  class - es15

- JSX: looks like HTML and can be placed in JS Code.  
* react Components are used for
  - event handler: used when user interact > update our component.
https://www.udemy.com/react-redux/learn/lecture/12531050#overview

- Why did we add two separate react lib
React is split into 2 libraries.
1) React: component is deflined, stitches up many components together
2) ReactDOM: take components > renders it to DOM


