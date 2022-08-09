import Header from "./components/Header";
import Intro from "./components/intro"
import FeaturedCard from "./components/featuredCard";
import FeaturedArea from "./components/featuredProject";
import OtherProjectsCard from "./components/otherProjectsCard";
import ProjectsCarousel from "./components/carousel";
import ContactMeCard from "./components/contactMeCard";
import ContactMeContainer from "./components/contactMeContainer";
import Footer from "./components/footer";






// import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <body className="background">
    
    <Header/>
    <Intro/>
    <FeaturedCard/>
    <FeaturedArea/> 
    <OtherProjectsCard/>
    <ProjectsCarousel/>
    <ContactMeCard/>
    <ContactMeContainer/>
    <Footer/>     
    </body>
  );
}

export default App;
