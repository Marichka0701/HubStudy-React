import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/reset.css';
import './Styles/general.css';
import Main from './Components/Main.js';

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Main></Main>
    </div>
  );
}

export default App;
