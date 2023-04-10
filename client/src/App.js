import './App.css';
import Main from "./Components/Main"
import Nav from "./Components/Nav"
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Styles/reset.css';
import "./Styles/general.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="wrapper">
     <Nav />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
