var React = require('react');
var Detail = require('./Detail');

class App extends React.Component {
  render(){
    return (
      <div>
        <Detail message="This is coming from props!"/>
      </div>
    )
  }
}

module.exports = App
