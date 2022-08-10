
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, {useState}from "react"


import Resume from "../images/reactResume.png"
function ContactMeContainer (){
  const [data, setData]=useState(null);  
  const [print,setPrint]=useState(false);


  function getName(data){
    data.preventDefault();
      setData(data.target.value)
      console.log(data.target.value)
      console('button clicked')
    }
  
  
  return(

    

      <Container className="abtAndJpicCon">
      <Row>
        <Col>
          <Card className="contactCard" style={{ width: "20rem" }}>
            <Card.Body>
            <Card.Title>Contact me</Card.Title>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <h1>{data}</h1>
                  <Form.Control type="textarea" placeholder="Enter your name" onChange={getName} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter your email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Leave a Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>

              <Card.Text>
                <div className="bg-light border">
                  <Button active onClick={()=>setPrint(true)} variant="primary" type="submit" >
                    Submit
                  </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>{" "}
        </Col>

        <Col>
          <div className="resume justify-content-around">
            <Card className="resumeCard" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Proficiencies</Card.Title>

                <Card.Text>
                  <p> Javascript, HTML, CSS, Bootstrap, JQuery, Node.js, MySQL, Express.js, React, Express-Sessions, MongoDB, Mongoose ODM, MongoDB Compass, Express-Handlebars, Dotenv, Bcrypt, NoSQL, Sequelize ORM, Git , Git-Hub, VS Code, Slack,  APIs, CRUD, Heroku, Jira, Insomnia, RestfulApi’s, concurrently, Apollo-server-express, Graphql, Webpack.</p>
                  <div className="bg-light ">
                    

                    <Button className="downloadResumeBtn" variant="primary" type="submit"><a className = "resumeDownload" href={Resume}  download={Resume}>Download Resume</a></Button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      </Container>
    )
}

export default ContactMeContainer;