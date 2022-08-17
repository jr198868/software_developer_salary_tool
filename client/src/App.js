import './App.css';
import Salarytoolnavbar from './salarytool-components/header/Salarytoolnavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatecompanyNav from './candidatecompany-components/header/Candidatecompanynavbar';



function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Salarytoolnavbar />}></Route>
                <Route path="/Home" element={<Salarytoolnavbar />}></Route>
                <Route path="/candidatecompany" element={<CandidatecompanyNav />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
