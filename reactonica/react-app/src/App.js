import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import{ BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
//Event
import EventsList from "./components/events-list.component";
import EditEvents from "./components/edit-events.component";
//User
import EditUsers from "./components/edit-user.component";
import CreateUsers from "./components/create-user.component";

//Savedevents


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={EventsList} />
      <Route path="/edit/:id" exact component={EditEvents} />
      <Route path="/create" exact component={EditUsers} />
      <Route path="/user" exact component={CreateUsers} />
      </div>
    </Router>
  );
}

export default App;
