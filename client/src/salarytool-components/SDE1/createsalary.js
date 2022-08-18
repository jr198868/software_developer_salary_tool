import React, { Component } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';


export default class CreateSalary extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompanyname = this.onChangeCompanyname.bind(this);
    this.onChangeBase = this.onChangeBase.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeBonus = this.onChangeBonus.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangSource = this.onChangSource.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      companyname: '',
      base: 0,
      stock: 0,
      bonus: 0,
      source: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.companyname),
            companyname: response.data[0].companyname
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeCompanyname(e) {
    this.setState({
      companyname: e.target.value
    })
  }

  onChangeBase(e) {
    this.setState({
      base: e.target.value
    })
  }

  onChangeStock(e) {
    this.setState({
      stock: e.target.value
    })
  }

  onChangeBonus(e) {
    this.setState({
      bonus: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangSource(e) {
    this.setState({
      source: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const salary = {
      companyname: this.state.companyname,
      base: this.state.base,
      stock: this.state.stock,
      bonus: this.state.bonus,
      date: this.state.date,
      source: this.state.source,
    }

    

    axios.post('http://localhost:5000/salarys/add', salary)
      .then(res => console.log(res.data));

      alert('Salary has been successfully added');
      
      window.location = '/';

  }

  
  render() {
    

    return (
    <div>
    <Typography component={"span"} variant={'h6'} sx={{ fontWeight: 'bold' }} > 
      Company Salary Record
    </Typography><br /><br />
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Company Name: </label>
          <input type="text"
              required
              className="form-control"
              onChange={this.onChangeCompanyname}
              />
        </div>
        <div className="form-group"> 
          <label>$ Base: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.base}
              onChange={this.onChangeBase}
              />
        </div>
        <div className="form-group"> 
          <label>$ Stock (/yr): </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.stock}
              onChange={this.onChangeStock}
              />
        </div>
        <div className="form-group">
          <label>$ Bonus: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.bonus}
              onChange={this.onChangeBonus}
              />
        </div>
        <div className="form-group">
          <label>$ Data source: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.source}
              onChange={this.onChangSource}
              />
        </div>
        <br /><br />

        <div className="form-group">
          <input type="submit" value="Create Salary Record" className="btn btn-primary" style = {{background: '#5D3FD3'}}/>
        </div>
      </form>
    </div>
    
    )
  }
}