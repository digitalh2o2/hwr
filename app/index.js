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


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={ App } />
      <Route exact path="/" component={ List }/>
      <Route path="/react/:repo" component={ Detail }/>
      <Route render={function() {
        return <p>Not Found</p>
      }} />
    </Switch>
  </Router>,
  document.getElementById('app')
)
