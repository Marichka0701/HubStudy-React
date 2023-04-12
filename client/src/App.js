import './App.css';
import HomePage from "./Components/Home"
import Nav from "./Components/Nav"
import Footer from './Components/Footer';
import Mentor from "./Components/Mentor"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Styles/reset.css';
import "./Styles/general.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import RegistrationPage from "./Components/Registration.jsx";
import RegistrationPageTwo from "./Components/RegistrationMentor.jsx"
import SignIn from "./Components/Sign-in-page.jsx"
import ProfileStudent from './Components/profileStudent';

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
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/student" element={<RegistrationPage />} />
        <Route path="/mentorship" element={<RegistrationPageTwo/>} />
        <Route path="/mentor-page" element={<Mentor />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/profile-student" element={<ProfileStudent/>} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
