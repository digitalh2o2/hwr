var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');
var Detail = require('./components/Detail');
var List = require('./components/List')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Link = require('react-router-dom').Link;
var Routes = require('./components/Routes');


ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app')
)
