import React, {useState} from "react";
import { useAuth0 } from "../react-auth0-spa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  }

  return (
    <div>
      <Navbar color="primary" dark expand="md" className="mb-5">
        <NavbarBrand href="/">Yasmine App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {!isAuthenticated && (
            <NavItem>
              <Button onClick={() => loginWithRedirect({redirect_uri: 'http://localhost:3000/users'})}>Login</Button>
            </NavItem>
          )}
          {isAuthenticated && (
            <NavItem>
              <Button onClick={() => logout()}>Logout</Button>
            </NavItem>
          )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )

  // return (
  //   <div>
  //     {!isAuthenticated && (
  //       <button onClick={() => loginWithRedirect({})}>Log in</button>
  //     )}

  //     {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

  //     {isAuthenticated && (
  //       <span>
  //         <Link to="/">Home</Link>&nbsp;
  //         <Link to="/profile">Profile</Link>
  //         <Link to="/external-api">External API</Link>
  //       </span>
  //     )}
  //   </div>
  // );
};

export default NavBar;