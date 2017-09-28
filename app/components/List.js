var React = require('react');
var App = require('./App');
var Link = require('react-router-dom').Link;

class List extends React.Component {
  render(){
    return(
      <div>
        <p>Please choose a repository from the list below.</p>
        <ul>
          <li><Link to="/detail/react">React</Link></li>
          <li><Link to="/detail/react-native">React Native</Link></li>
          <li><Link to="/detail/jest">Jest</Link></li>
        </ul>
      </div>
    )
  }
}

module.exports = List;
