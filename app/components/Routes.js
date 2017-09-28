var React = require('react')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var App = require('./App');
var List = require('./List');
var Detail = require('./Detail');

function Routes(){
  return (
    <div>
    <Switch>
      <Route exact path="/" component={ App } />
      <Route exact path="/" component={ List }/>
      <Route path="/detail/:repo" component={ Detail }/>
      <Route render={function() {
        return <p>Not Found</p>
      }} />
    </Switch>
    </div>
  )
}

module.exports = Routes;
