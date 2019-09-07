import React, { Component } from 'react';
import axios from 'axios';
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeUserAge = this.onChangeUserAge.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: '',
      userID: 0,
      userAge: 0,
      userEmail: '',
      users: []
    }
  }

componentDidMount(){
    // axios.get("http://localhost:3000/users/add")
    //   .then(response)
    

  }

onChangeUserName(e) {
  this.setState({
    userName: e.target.value
  })
}
onChangeUserID(e) {
  this.setState({
    userID: e.target.value
  })
}

onChangeUserAge(e) {
  this.setState({
    userAge: e.target.value
  })
}
onChangeUserEmail(e) {
  this.setState({
    userEmail: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();
  
  const createuser = {
    userName: this.state.userName,
    userID: this.state.userID,
    userAge: this.state.userAge,
    userEmail: this.state.userEmail
  }
  console.log(createuser);
  axios.post("/users/add", createuser)
  .then(res => console.log(res.data));
  // window.location = '/';
}

/*
<select ref="userInput"
              required
              className="form-control"
              value={this.state.userName}
              onChange={this.onChangeUserName}>
              {
                // this.state.users.map(function(users) {
                  return <option 
                    key={users}
                    value={users}>{users}
                    </option>;
                })
              }
          </select>
*/

  render(){
    return (
      <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>User name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.userName}
              onChange={this.onChangeUserName}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>

    )
  }
}