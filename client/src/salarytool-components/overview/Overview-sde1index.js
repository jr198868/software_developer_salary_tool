import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { BarChart, Line, Area, ComposedChart, Bar, CartesianGrid, Legend, XAxis, YAxis, Label, Tooltip } from 'recharts';


export default function Overview_index () {
const [salarymost, setSalarymost] = useState([])
const fetchData_salarymost = () => {
   // fetch("http://localhost:4000/salarys/")
   fetch("https://software-developer-salary-tool.herokuapp.com/salarys/")
    .then(response => {
      return response.json()
    })
    .then(data => {
        var res = []
        for (let i of data) {
          res.push({'companyname':i['companyname'], 'base': i['base'], 'stock': i['stock'], 'bonus':i['bonus']})
          setSalarymost(res)
        }
    })
}

useEffect(() => {
    fetchData_salarymost()
}, [])


var salarymost_plot = []

for (const i of salarymost) {
    var tmp = {}
    tmp['Company Name'] = i['companyname']
    tmp['Base'] = i['base']
    tmp['SDE1 Total Salary']= i['base'] + i['stock'] + i['bonus']
    salarymost_plot.push(tmp)
}

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}

salarymost_plot = sort_by_key(salarymost_plot, 'SDE1 Total Salary');
salarymost_plot = salarymost_plot.reverse().slice(0, 11)

return (
    <Box sx={{width: '100%', typography: 'body1' }}> 
    <h5 style={{ fontWeight: 'bold' }}> Top 15 companies with the highest SDE I total salary</h5><br />
        <ComposedChart width={1200} height={250} data={salarymost_plot}>
            <XAxis dataKey="Company Name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="SDE1 Total Salary" barSize={20} fill="#8884d8" />
            <Line type="Function" dataKey="Base" stroke="#DE3163" strokeWidth={2}/>
        </ComposedChart>
    </Box>
)
}
