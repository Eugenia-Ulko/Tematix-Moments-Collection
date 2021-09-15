import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, NavDropdown, Nav, Navbar
} from 'react-bootstrap';
import { logout } from '../../redux/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>TEMATIX</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/about">
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>Contact us</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Programs" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link data-testid="cart-button-link">
                  <i className="fas fa-shopping-cart" data-testid="icon-cart" />
                  Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link eventKey={2}>
                    <i className="fas fa-user" />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <img src="https://i.ibb.co/fCCyH1t/girl-429380-1920.jpg" alt="Beachgirl" className="header-image" /> */}
    </header>
  );
};
export default Header;
