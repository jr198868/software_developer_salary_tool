import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import SalaryList from "./salarylist.component";
import CreateSalary from "./createsalary";
// import CreateUser from "./components/create-user.component";



function SDE1() {
  return (
    <div>
        <CreateSalary />
        <SalaryList />   
    </div>
  );
}

export default SDE1;