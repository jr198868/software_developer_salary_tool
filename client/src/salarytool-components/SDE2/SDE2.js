import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import SalaryListsde2 from "./salarylist-sde2";
import CreateSalarysde2 from "./createsalary-sde2";
import SalaryQuery from "./salaryquery-sde2";



function SDE1() {
  return (
    <div>
        <CreateSalarysde2 />
        <SalaryQuery />
        <SalaryListsde2 />   
    </div>
  );
}

export default SDE1;