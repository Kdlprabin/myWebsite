import React from "react";
import NavBar from "./components/NavBar";
import InfoBar from "./components/InfoBar"
import CardGrid from "./CardGrid";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import HTMLlogo from "./images/html.png";
import CSSlogo from "./images/css.png";
import JSlogo from "./images/js.png";
import PHPlogo from "./images/php.png";


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <InfoBar message="My Arsenal includes some of these:" />
      <CardGrid  title1="JavaScript" image1={JSlogo} title2="PHP" image2={PHPlogo} title3="HTML" image3={HTMLlogo} title4="CSS" image4={CSSlogo} />
      <InfoBar message="Some of my recent Projects: " />
      <CardGrid  title1="E-commerce" image1={JSlogo} title2="Portfolio" image2={PHPlogo} title3="web-App" image3={HTMLlogo} title4="Games" image4={CSSlogo} />
      <hr className="text-white" />
      <Footer />
    </>
  );
};

export default App;
