import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import './App.css';
const hello = "hi christina";
function App() {
  return (

    

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Jesus's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#introduction">About Me</Nav.Link>
            <Nav.Link href="#featuredPrject">Featured Projects</Nav.Link>
            <Nav.Link href="#otherProjects">Contact</Nav.Link>
            <Nav.Link href="#contact">Resume</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>


      <Container className='abtAndJpicCon' >
      <Row  lg={6}>
        <Col lg={6} ><h1 className="aboutme">Proactive and personable aspiring full-stack web developer currently pursuing a Web Development Boot Camp professional certification from the University of Texas in Austin, Texas. A strong team player and proven leader, leading multiple group projects. Passionate about web development, and a quick learner of web development technologies.</h1></Col>
       
        <Col lg={6}><img src="/mainPic.jpeg" alt = "jesusPic" className='jesusPic'></img></Col>
      </Row>
    </Container>
    <Card bg="dark" variant="dark">
      <Card.Body className='featuredCard'>Featured Project</Card.Body>
    </Card>



      
    </>
  );
}

export default App;
