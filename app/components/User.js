var React = require('react');
var ajax = require('superagent');
var NavLink = require('react-router-dom').Link

class User extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      events: []
    };
  }
  componentWillMount(){
    ajax.get(`https://api.github.com/users/${this.props.match.params.user}/events`)
    .end((error, response) =>{
      if(!error && response) {
        console.dir(response.body);
        this.setState({ events: response.body })
      } else {
        console.log(`Error fetching data from api`, error)
      }
    })
  }

  render(){
    return(
      <div>
        <p>You are here: <NavLink to="/" activeClassName="active">Home</NavLink> > {this.props.match.params.user} </p>
        <ul>
          {this.state.events.map((event,index) =>{
            const eventType = event.type;
            const repoName = event.repo.name;
            const creationDate = event.created_at;

            return(<li key={index}>
              <strong>{repoName}</strong>: {eventType}
              at {creationDate}.
            </li>
            )
          })}
        </ul>
      </div>

    )
  }
}

module.exports = User;
