
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Footer (){
    return(
        <Card bg="dark" variant="dark" className="footerCard" id="footer"> 
        <Card.Body>
          {" "}
          <Row>
            <Col>Email: oyervidesjesus017@gmail.com</Col>
            <Col>
            <a href="https://www.linkedin.com/in/jesus-oyervides-51b89820b/">LinkedIn  </a> 
              <img
                src="/linkedin.png"
                alt="linkedInPic"
                className="footerPics"
              ></img>
            </Col>
            <Col>
            <a href="https://github.com/jesusoyer">GitHub  </a> 
              <img
                src="/GitHub_Logo_White.png"
                alt="githubPic"
                className="footerPics"
              ></img>
            </Col>
            <Col>
            <a href="https://stackoverflow.com/users/18030586/jesus-oyervides">StackOverflow</a> 
              
              <img
                src="/stackoverflow.png"
                alt="stackoverflowPic"
                className="footerPics"
              ></img>
            </Col>
          </Row>
          <Col className="bottomLink" xs lg="2">
          <Nav.Link href="#top">Back to the Top</Nav.Link>
          </Col>
        </Card.Body>
      </Card>


    )
}


export default Footer;