import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.svg';
import logoMobile from '../img/logo-mob.png';
import '../Styles/navbar.css';

function App() {
  return (
    <div className="navbar-menu">
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <picture>
                <source srcSet={logoMobile} media="(max-width: 420px)" />
                <source srcSet={logo} media="(min-width: 421px)" />
                <img src={logo} alt="" />
            </picture>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HubStudy
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                    className='nav-item'
                    title="Обрати напрям"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className='nav-item' href="#action7">Блог</Nav.Link>
                  <Nav.Link className='nav-item' href="#action8">Увійти</Nav.Link>
                </Nav>
                <button className='button-nav'>Зареєструватись</button>
                <NavDropdown
                    title="Укр"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1">Eng</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action2">
                      Polish
                    </NavDropdown.Item>
                  </NavDropdown>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default App;