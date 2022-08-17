import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import SalaryListsde2 from "./salarylist-sde2";
import CreateSalarysde2 from "./createsalarysde2";
// import CreateUser from "./components/create-user.component";



function SDE1() {
  return (
    <div>
        <CreateSalarysde2 />
        <SalaryListsde2 />   
    </div>
  );
}

export default SDE1;