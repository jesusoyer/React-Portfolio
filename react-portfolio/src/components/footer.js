
import Card from "react-bootstrap/Card";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Footer (){
    return(
        <Card bg="dark" variant="dark" className="featuredCard">
        <Card.Body>
          {" "}
          <Row>
            <Col>Email: oyervidesjesus017@gmail.com</Col>
            <Col>
              linkedIn
              <img
                src="/linkedin.png"
                alt="linkedInPic"
                className="footerPics"
              ></img>
            </Col>
            <Col>
              GitHUb
              <img
                src="/GitHub_Logo_White.png"
                alt="githubPic"
                className="footerPics"
              ></img>
            </Col>
            <Col>
              StackOverflow
              <img
                src="/stackoverflow.png"
                alt="stackoverflowPic"
                className="footerPics"
              ></img>
            </Col>
          </Row>
          <Col className="bottomLink" xs lg="2">
            Back to the top
          </Col>
        </Card.Body>
      </Card>


    )
}


export default Footer;