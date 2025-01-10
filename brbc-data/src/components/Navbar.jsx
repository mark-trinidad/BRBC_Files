import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/BRBCcircle.png";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <img src={Logo} alt="BRBC Logo" style={{ height: "120px" }} />
            <h1>Bahrain Reformed Baptist Church</h1>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
