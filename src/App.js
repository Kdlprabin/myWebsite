import React from "react";
import NavBar from "./components/NavBar";
import InfoBar from "./components/InfoBar"
import CardGrid from "./CardGrid";
import Hero from "./Routes/Hero";
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
      <CardGrid   HTMLlogo={HTMLlogo} CSSlogo={CSSlogo} JSlogo={JSlogo} PHPlogo={PHPlogo}  />
    </>
  );
};

export default App;
