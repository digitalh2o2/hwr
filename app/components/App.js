var React = require('react');
var List = require('./List');

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Unofficial GitHub Browser v0.1</h1>
        <List />
      </div>
    )
  }
}

module.exports = App
