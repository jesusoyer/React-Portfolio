
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (

<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand id = "top">Jesus's Portfolio</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#aboutMe">About Me</Nav.Link>
    <Nav.Link href="#featured">Projects</Nav.Link>
    <Nav.Link href="#contactMe">Contact Info</Nav.Link>
    <Nav.Link href="#footer">Social Media</Nav.Link>
  </Nav>
</Container>
</Navbar>
    )
}

export default Header;