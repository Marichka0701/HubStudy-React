import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.svg';
import logoMobile from '../../img/logo-mob.png';
import '../../Styles/main/navbar.css';
import HomePage from '../Home';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="navbar-menu">
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
                <picture>
                  <source srcSet={logoMobile} media="(max-width: 420px)" />
                  <source srcSet={logo} media="(min-width: 421px)" />
                  <img src={logo} alt="" />
                </picture>
              </Link>
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
                  <Link to="/blog" >
                    <Nav.Link className='nav-item' href="#action7">Блог</Nav.Link>
                  </Link>
                  <Link to="/sign-in">
                    <button className='sign-in'>Увійти</button>
                  </Link>

                </Nav>

                <Link to="/registration">
                  <button className='sign-up'>Зареєструватись</button>
                </Link>
                {/* <button className='sign-up' >Зареєструватись</button> */}

                {/* <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button> */}


                {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}



                {/* <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal> */}


                {/* <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Реєстрація
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-btn'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
      </Modal> */}


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