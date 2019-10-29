import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      list: true,
      card: false,
      players: [],
      player: {}
    };
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    };
    fetch("http://localhost:3001/players/list")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ players: responseJson.data });
      });
  }
  showCard = id => {
    fetch(`http://localhost:3001/players/${id}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ player: responseJson.data });
      });
    this.setState({
      list: false,
      card: true
    });
  };

  showList = () => {
    this.setState({
      card: false,
      list: true
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
};


  render() {
    return (
      <div className="container">
        {this.state.list ? (
          <div className="list-group">
            {this.state.players.map(player => (
              <li
                onClick={() => this.showCard(player._id)}
                className="list-group-item list-group-item-action"
              >
                {player.name}
              </li>
            ))}
          </div>
        ) : null}
        {this.state.card ? (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{this.state.player.name}</h5>
              <p class="card-text">{this.state.player.runs}</p>
              <div onClick={() => this.showList()} class="btn btn-primary">
                Back
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
