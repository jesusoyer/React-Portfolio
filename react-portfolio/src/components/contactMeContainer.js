
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ContactMeContainer (){
    return(



      <Container className="abtAndJpicCon">
      <Row>
        <Col>
          <Card className="contactCard" style={{ width: "20rem" }}>
            <Card.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter name</Form.Label>
                  <Form.Control type="textarea" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>

              <Card.Text>
                <div className="bg-light border">
                  <Button variant="primary" type="submit">
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
                  skilled in
                  <div className="bg-light border">
                    <Button variant="primary" type="submit">
                      {" "}
                      download resume
                    </Button>
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