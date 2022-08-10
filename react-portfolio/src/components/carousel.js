import eagleeye from "../images/eagleeye.png"
import DayPlanner from "../images/DayPlanner.png"
import weatherDashboard from "../images/weatherDashboard.png"
import employeeTracker from "../images/employeeTracker.png"
import quizGame from "../images/Quiz game.png"
import PasswordGenerator from "../images/PasswordGenerator.png"



import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";


function ProjectsCarousel(){
    return(
        <Container className="abtAndJpicCon">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={eagleeye}
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
                <a href="https://github.com/surfinsofia/groupproject1">
                  {" "}
                  link to Repository...
                </a>{" "}
                <a href="https://surfinsofia.github.io/groupproject1/">
                  {" "}
                  link to Website
                </a>{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={DayPlanner}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3 className='carouselDescription'>Second slide label</h3> */}
              <p className="carouselParagraph">
                It allows the user to type in an event in a timeblock and save
                it to local storage by clicking the save button. It also allows
                the user to reset the calender by clicking the reset button. I
                created this project to help a user keep track of thier day.

                <a href="https://github.com/jesusoyer/Day-Planner">
                  {" "}
                  link to Repository....
                </a>{" "}
                <a href="https://jesusoyer.github.io/Day-Planner/">
                  {" "}
                  link to Website
                </a>{" "}
                
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={weatherDashboard}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3 className='carouselDescription'>Second slide label</h3> */}
              <p className="carouselParagraph">
              This is an application that is can check the weather in a city and will give the user a five day a forcast. This project is created to help users view the weather of a location that can be used for planning trips..
              <a href="https://github.com/jesusoyer/Weather-Dashboard">
                  {" "}
                  link to Repository...
                </a>{" "}
                <a href="https://jesusoyer.github.io/Weather-Dashboard/">
                  {" "}
                  link to Website
                </a>{" "}
              {" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={employeeTracker}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3 className='carouselDescription'>Second slide label</h3> */}
              <p className="carouselParagraph">
              For a buisness that needs to keep track of its employees through a sql database. This program allows the user to browse through various menus that can show the buisness'roles, and employees. It also allows the user to add departments, roles and employees as well as remove employees from the database.
              <a href="https://github.com/jesusoyer/Employee-tracker">
                  {" "}
                  link to Repository...
                </a>{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={quizGame}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3 className='carouselDescription'>Second slide label</h3> */}
              <p className="carouselParagraph">
              A fun and challenging quiz game Here is the link to my quiz game...

              <a href="https://github.com/jesusoyer/Quiz-game">
                  {" "}
                  link to Repository...
                </a>{" "}
                <a href="https://jesusoyer.github.io/Quiz-game/">
                  {" "}
                  link to Website
                </a>{" "}
              {" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-50"
              src={PasswordGenerator}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3 className='carouselDescription'>Second slide label</h3> */}
              <p className="carouselParagraph">
              A program to for creating random passwords based on criteria you select.
              
              <a href="https://github.com/jesusoyer/Password-Generator">
                  {" "}
                  link to Repository...
                </a>{" "}
                <a href="https://jesusoyer.github.io/Password-Generator/">
                  {" "}
                  link to Website
                </a>{" "}
              
              </p>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>

        
      </Container>

    )
}

export default ProjectsCarousel;