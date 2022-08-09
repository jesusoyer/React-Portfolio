

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Intro(){
    return(
<Container className="abtAndJpicCon">
        <Row lg={6}>
          <Col lg={6}>
            <h1 className="aboutme">
              Proactive and personable aspiring full-stack web developer
              currently pursuing a Web Development Boot Camp professional
              certification from the University of Texas in Austin, Texas. A
              strong team player and proven leader, leading multiple group
              projects. Passionate about web development, and a quick learner of
              web development technologies.
            </h1>
          </Col>

          <Col lg={6}>
            <img src="/mainPic.jpeg" alt="jesusPic" className="jesusPic"></img>
          </Col>
        </Row>
      </Container>
    )
}

export default Intro;