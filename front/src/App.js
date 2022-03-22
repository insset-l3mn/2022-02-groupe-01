import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from './Components/Home';
import StudentLogin from './Components/Student/Login';
import StudentApp from './Components/Student/App';

function App() {

  let isStudentLoggedIn = (localStorage.getItem('isStudentLoggedIn') === 'true') ?  true : false ;
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="student/login" element={<StudentLogin />} />
        <Route path="student/*" element={<StudentApp />} />
      </Routes>
    </div>
  );
}

export default App;
