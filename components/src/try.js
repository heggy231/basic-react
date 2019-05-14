<script type="text/babel" data-presets="env,react">
  const App = () => {
      return (
        <div>
          <Segment>
              <div className="ui icon header">
                  <i className="pdf file outline icon"></i>
                  No documents are listed for this customer.
              </div>
              <div className="ui primary button">Add Document</div>
          </Segment>
          <Segment>
              <h4 class="ui header">For Your Information</h4>
              <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
              </p>
          </Segment>
        </div>
      );
  }

  const Segment = props => {
    return (
      <div className="ui placeholder segment">{props.children}
      </div>
    );
  };
    
    
    

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>


<!--The App component above will be rendered into this-->
<div id="root"></div>


<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />