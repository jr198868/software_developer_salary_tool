import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";

//import Navbar from "./components/navbar.component"
import ExercisesList from "../SDE1/exercises-list.component";
import EditExercise from "../SDE1/Edit-exercise.component";
import CreateExercise from "../SDE1/create-exercise.component";
// import CreateUser from "./components/create-user.component";



function SDE1() {
  return (
    <div>
        <CreateExercise />
        {/* <EditExercise />  */}
        <ExercisesList />   

        
    </div>
  );
}

export default SDE1;