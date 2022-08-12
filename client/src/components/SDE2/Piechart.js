import React, {Component, useState, memo } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "../SDE2/Piechart.css";


const labels = [
  ["Base", "#ff0000"],
  ["Bonus", "#F39C12"],
  ["Stock", "#07b9a2"]
];


export default class Pieapp extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
      }

  render() {
  return (
    <div className="Pieapp">
        <div style={{fontWeight: '600'}}>Salary Distribution Chart</div><br />
        <PieChart 
          paddingAngle={5}
          labelStyle={{
            fontSize: "4px",
            fill: "#000"
          }}
          labelPosition={70}
          lineWidth={50}
          label={({ dataEntry }) =>
            `${dataEntry.title} ${Math.round(dataEntry.percentage)}%`
          }
          style={{height: 360, fontWeight: '600'}}
        
        data={[
            { title: 'Base:', value: parseInt(this.props.passbase), color: '#ff0000' },
            { title: 'Bonus:', value: parseInt(this.props.passbonus), color: '#F39C12' },
            { title: 'Stock:', value: parseInt(this.props.passstock), color: '#07b9a2' },
        ] }/>
      </div>
  );
}
}

