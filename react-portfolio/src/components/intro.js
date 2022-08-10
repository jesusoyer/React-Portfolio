
import mainPic from "../images/mainPic.jpeg"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Intro(){
    return(
<Container className="abtAndJpicCon" id="aboutMe">
        <Row lg={6}>
          <Col lg={6}>
            <h1 className="aboutme">
              Hello, My name is Jesus Oyervides jr, I am a recent graduate from the University of Texas fullstack coding bootcamp.
              I love creating new things from plastic models to fullstack applications. I have a love for making restfull APIs, and 
              you will most often find me here at my computer or out trying the next big thing. Below I have projects that I am excited
              to show you along with my social media information and if you are feeling even more adventurous feel free to download my resume and leave me a message. 
             
            </h1>
          </Col>

          <Col lg={6}>
            <img src= {mainPic} alt="jesusPic" className="jesusPic"></img>
          </Col>
        </Row>
      </Container>
    )
}

export default Intro;