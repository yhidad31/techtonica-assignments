import React, { Component } from "react";

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
componentDidMount() {
  fetch("http://localhost:3001/players/list")
  .then(response => response.json())
  .then( responseJson=> {
    this.setState({ players:responseJson.data });
  },
)}
showCard=id=> {
  fetch(`http://localhost:3001/players/${id}`)
  .then(response => response.json())
  .then(
  responseJson=> {this.setState({ player:responseJson.data })},
);
this.setState({
  list:false,
  card:true
});
};
showList = () => {
   this.setState({
     card: false,
     list: true
   });
};
}