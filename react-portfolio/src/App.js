import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import './App.css';

function App() {

  
  const [lgShow, setLgShow] = useState(false);

  return (

    

    <>
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


      <Container className='abtAndJpicCon' >
      <Row  lg={6}>
        <Col lg={6} ><h1 className="aboutme">Proactive and personable aspiring full-stack web developer currently pursuing a Web Development Boot Camp professional certification from the University of Texas in Austin, Texas. A strong team player and proven leader, leading multiple group projects. Passionate about web development, and a quick learner of web development technologies.</h1></Col>
       
        <Col lg={6}><img src="/mainPic.jpeg" alt = "jesusPic" className='jesusPic'></img></Col>
      </Row>
    </Container>
    <Card bg="dark" variant="dark" className='featuredCard' >
      <Card.Body >Featured Project</Card.Body>
    </Card>
    <Container className='featuredContainer'>

      
    <div className="d-flex justify-content-around">
      <Card style={{ width: '70rem' }}>
        <Card.Img variant="top" src="biblioTecha.png" />
        <Card.Body>
          <Card.Title>biblioTecha</Card.Title>
          <Card.Text>
          biblioTECHa is a website that gives users their own virtual library card. As a user you will be able to search and add books to your booklist, create reviews, and comment on fellow readers' posts.
          <a href="https://arcane-harbor-36381.herokuapp.com/">  link to biblioTECHa</a>
          </Card.Text>
          
        </Card.Body>
      </Card>  
    </div>

    </Container>
    <Card bg="dark" variant="dark" className='featuredCard' >
      <Card.Body >Other Projects</Card.Body>
    </Card>
   
  

   <Container className='abtAndJpicCon'>
   <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="/eagleeye.png"
          alt="First slide"
        />
        <Carousel.Caption >
          {/* <h3 className='carouselDescription' >Eagleeye</h3> */}
          <p className='carouselParagraph'>State Park goers who would like to easily access information about the national parks and daily weather for the national parks. This application pulls data from the National Parks API and Weather API. This allows users to keep an eye on the current weather conditions at each park. By merging both databases we are able to create an application that provides specific and accurate weather and park information.<a href="https://surfinsofia.github.io/groupproject1/">  link to Eagleeye</a> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="/DayPlanner.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3 className='carouselDescription'>Second slide label</h3> */}
          <p className='carouselParagraph'>It allows the user to type in an event in a timeblock and save it to local storage by clicking the save button. It also allows the user to reset the calender by clicking the reset button. I created this project to help a user keep track of thier day. </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
     </Container>

  
    <Card bg="dark" variant="dark" className='featuredCard' >
      <Card.Body >Contact information</Card.Body>
    </Card>

    <Container className='abtAndJpicCon'>
    
      <Button onClick={() => setLgShow(true)}>Click to leave your contact info</Button>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            
          </Modal.Title>  
        </Modal.Header>
        <Modal.Body> <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Input your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></Modal.Body>
      </Modal>


    </Container>


      
    </>
  );
}

export default App;
