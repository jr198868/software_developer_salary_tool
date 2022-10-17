import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import SalaryList from "./salarylist-sde1";
import CreateSalary from "./createsalary-sde1";
import SalaryQuery from "./salaryquery-sde1";



function SDE1() {
  return (
    <div>
        <CreateSalary />
        <SalaryQuery />
        <SalaryList />   
    </div>
  );
}

export default SDE1;