import React, { Component } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';


const Salary = props => (
  <tr>
    <td>{props.salary.companyname}</td>
    <td>{props.salary.base}</td>
    <td>{props.salary.stock}</td>
    <td>{props.salary.bonus}</td>
    <td>{props.salary.date.substring(0,10)}</td>
    <td>
    <a href = '#' onClick={() => { props.deleteSalary(props.salary._id) }} style={{ textDecoration: 'none' }}>delete</a>
    </td>
  </tr>
)


export default class SalaryList extends Component {


  
  constructor(props) {
    super(props);

    this.deleteSalary = this.deleteSalary.bind(this)

    this.state = {salarys: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/salarys/')
      .then(response => {
        this.setState({ salarys: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSalary(id) {
    axios.delete('http://localhost:5000/salarys/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      salarys: this.state.salarys.filter(el => el._id !== id)
    })
  }

  salaryList() {
    return this.state.salarys.map(currentsalary => {
      return <Salary salary={currentsalary} deleteSalary={this.deleteSalary} key={currentsalary._id}/>;
    })
  }

  render() {




    return (
      <div>
        <br /><br />
        <Typography component={"span"} variant={'h6'} sx={{ fontWeight: 'bold' }}>
          Software Development Engineer I Salary by Company
        </Typography><br /><br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Company Name</th>
              <th>Base ($)</th>
              <th>Stock ($/yr)</th>
              <th>Bonus ($)</th>
              <th>Creation Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.salaryList() }
          </tbody>
        </table>
      </div>
    )
  }
}