import React, { Component }from "react";
import Chart from 'react-apexcharts';
import axios from 'axios';

var companymap = new Map()
var basemap = new Map()
var stockmap = new Map()
var bonusmap = new Map()

const Salary = props => (
   
    <div></div>
)


export default class Overviewsde1 extends Component {


    constructor(props) {
        super(props); 
        this.state = {salarys: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:4000/salarys-sde2/')
        // axios.get('https://software-developer-salary-tool.herokuapp.com/salarys-sde2/')
          .then(response => {
            this.setState({ salarys: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
          
      }

      salaryList() {
        for (let i = 0; i<this.state.salarys.length; i++) {
            for (let j = 0; j<Object.entries(this.state.salarys).length; j++) {
                basemap.set(Object.entries(this.state.salarys)[j][1]['companyname'], Object.entries(this.state.salarys)[j][1]['base'])
                const baselist = Array.from(basemap.values())

                stockmap.set(Object.entries(this.state.salarys)[j][1]['companyname'],Object.entries(this.state.salarys)[j][1]['stock'])
                const stocklist = Array.from(stockmap.values())
                
                bonusmap.set(Object.entries(this.state.salarys)[j][1]['companyname'],Object.entries(this.state.salarys)[j][1]['bonus'])
                const bonulist = Array.from(bonusmap.values())
                
                companymap.set(Object.entries(this.state.salarys)[j][1]['companyname'],Object.entries(this.state.salarys)[j][1]['companyname'])
                const companylist = Array.from(companymap.values())
                

            }
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
                <h3 style={{ fontWeight: 'bold' }}>Stacked Bar Chart for SDE II Salary</h3>
                <Chart
                type="bar"
                width={580}
                height={540}
                series={[
                    {
                        name:"$ Base",
                        data: Array.from(basemap.values()),
                    },
                    {
                        name:"$ Stock (/yr)",
                        data: Array.from(stockmap.values()),
                    },
                    {
                        name:"$ Bonus",
                        data: Array.from(bonusmap.values()),
                    },


                ]}

                options={{
                    colors : ['#ff0000', '#F39C12', '#07b9a2'],
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
                                fontSize: '18px'
                            }
                        },
                        categories:Array.from(companymap.values())
                    },
                    yaxis:{
                        // title:{
                        //     text:"Companies",
                        //     style: {
                        //         fontSize: '14px'
                        //     },
                        //     align: 'left',
                            
                        // },

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