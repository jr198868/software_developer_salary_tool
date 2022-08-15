import React, { Component }from "react";
import Chart from 'react-apexcharts';
import axios from 'axios';

var baselist = []
var stocklist = []
var bonuslist = []
var companylist = []

const Salary = props => (
   
    <div>
      {/* <div>{props.salary.companyname}</div>
      <div>{props.salary.base}</div>
      <div>{props.salary.stoock}</div>
      <div>{props.salary.binus}</div>     */}
    </div>
)


export default class Overviewsde1 extends Component {


    constructor(props) {
        super(props); 
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

      salaryList() {
        for (let i = 0; i<this.state.salarys.length; i++) {
            
            baselist.push(this.state.salarys[i]['base'])
            stocklist.push(this.state.salarys[i]['stock'])
            bonuslist.push(this.state.salarys[i]['bonus'])
            companylist.push(this.state.salarys[i]['companyname'])
            baselist = baselist.slice(0, this.state.salarys.length-1)
            stocklist = stocklist.slice(0, this.state.salarys.length-1)
            bonuslist = bonuslist.slice(0, this.state.salarys.length-1)
            companylist = companylist.slice(0, this.state.salarys.length-1)
        }
        
        
        return this.state.salarys.map(currentsalary => {
            return <Salary salary={currentsalary} key={currentsalary._id}/>;
        
            
        })
      }




    render() {

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <div>{ this.salaryList() }</div>
                <h2>Stacked Bar Chart for SDE I Salary</h2>
                <Chart
                type="bar"
                width={1349}
                height={560}
                series={[
                    {
                        name:"$ Base",
                        data: baselist,
                    },
                    {
                        name:"$ Stock (/yr)",
                        data: stocklist,
                    },
                    {
                        name:"$ Bonus",
                        data: bonuslist,
                    },


                ]}

                options={{
                    title:{
                        text:"Unit: United States dollar (USD)"
                    },
                    chart:{
                        stacked:true,
                    },
                    plotOptions:{
                        bar:{
                            horizontal:true,
                            columnWidth:'100%'
                          }
                    },
                    stroke: {
                        width: 1,
                    },
                    xaxis:{
                        title:{
                            text:"Annual Salary in US dollars",
                            style: {
                                fontSize: '14px'
                            },
                        },
                        labels: {
                            style: {
                                fontSize: '16px'
                            }
                        },
                        categories:companylist
                    },
                    yaxis:{
                        title:{
                            text:"Companies",
                            style: {
                                fontSize: '14px'
                            },
                        },

                        labels: {
                            style: {
                                fontSize: '16px'
                            }
                       }
                    },
                    legend:{
                        position: 'bottom'
                    },
                    dataLabels:{
                        enabled:true,
                    },
                    grid: {
                        show:true,
                        xaxis:{
                            lines:{
                                show:false
                            }
                        },
                        yaxis:{
                            lines:{
                                show:false
                            }
                        }

                    },
                    legend: {
                        fontSize: "18px"
                      },

                }}
                />
            </div>
        </React.Fragment>
    );
}
}