
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (

<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand>Jesus's Portfolio</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#introduction">About Me</Nav.Link>
    <Nav.Link href="#featuredProject">Projects</Nav.Link>
    <Nav.Link href="#otherProjects">Contact</Nav.Link>
    <Nav.Link href="#contact">Resume</Nav.Link>
  </Nav>
</Container>
</Navbar>
    )
}

export default Header;