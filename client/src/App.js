// import logo from './logo.svg';
// import './App.css';
// import Nav from './Components/main/Nav.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/Styles/main/reset.css';
// import '../src/Styles/main/general.css';
// import Main from './Components/main/Main.js';
// import Footer from './Components/main/Footer';

// import { Switch, Route } from 'react-router-dom';

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from "./Components/Home.js";
// import RegistrationPage from "./Components/sign-up/Registration.js";


// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/registration" component={RegistrationPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home.js";
import RegistrationPage from "./Components/sign-up/Registration.js";
import RegistrationPageTwo from "./Components/sign-up/RegistrationMentor.js";
import MentorPage from "./Components/mentorSphere/mentor.js";
import BecomeMentor from "./Components/sign-up/RegistrationMentor.js";
import SignIn from "./Components/sign-in/Sign-in-page.js";
import ProfileStudent from "./Components/profile/profileStudent.js";
import SpherePage from "./Components/mentorSphere/sphere.js";



function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/registration" component={RegistrationPage} />
    //   </Switch>
    // </Router>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/mentorship" element={<RegistrationPageTwo/>} />
        <Route path="/student" element={<RegistrationPage/>} />
        <Route path="/mentor-page" element={<MentorPage/>} />
        <Route path="/become-mentor" element={<BecomeMentor/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/profile-student" element={<ProfileStudent/>} />
        <Route path="/sphere" element={<SpherePage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
