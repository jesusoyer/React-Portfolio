

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";


function ProjectsCarousel(){
    return(
        <Container className="abtAndJpicCon">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src="/eagleeye.png"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3 className='carouselDescription' >Eagleeye</h3> */}
              <p className="carouselParagraph">
                State Park goers who would like to easily access information
                about the national parks and daily weather for the national
                parks. This application pulls data from the National Parks API
                and Weather API. This allows users to keep an eye on the current
                weather conditions at each park. By merging both databases we
                are able to create an application that provides specific and
                accurate weather and park information.
                <a href="https://surfinsofia.github.io/groupproject1/">
                  {" "}
                  link to Eagleeye
                </a>{" "}
              </p>
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
              <p className="carouselParagraph">
                It allows the user to type in an event in a timeblock and save
                it to local storage by clicking the save button. It also allows
                the user to reset the calender by clicking the reset button. I
                created this project to help a user keep track of thier day.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

    )
}

export default ProjectsCarousel;