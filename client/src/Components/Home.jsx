// import '../App.css';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/reset.css';
import '../Styles/general.css';
import Main from './Main';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="wrapper">
      <Nav/>
      <Main></Main>
      <Footer></Footer>
    </div>
   );
}

export default HomePage;
