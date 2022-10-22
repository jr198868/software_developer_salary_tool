import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompanyname = this.onChangeCompanyname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      companyname: ''
    }
  }

  onChangeCompanyname(e) {
    this.setState({
      companyname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      companyname: this.state.companyname
    }

    console.log(user);

    // axios.post('http://localhost:4000/users/add', user)
    axios.post('https://software-developer-salary-tool.herokuapp.com/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      companyname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Company Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.companyname}
                onChange={this.onChangeCompanyname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}