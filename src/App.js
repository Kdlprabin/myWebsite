import React from "react";
import NavBar from "./components/NavBar";
import CardElement from "./components/Card";
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
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <CardElement
          title="HTML"
          subtitle="(Hyper Text Markup Language)"
          image={HTMLlogo}
        />
        <CardElement
          title="CSS"
          subtitle="(Cascading Style Sheet)"
          image={CSSlogo}
        />
        <CardElement title="JS" subtitle="(JavaScript)" image={JSlogo} />
        <CardElement
          title="PHP"
          subtitle="(Personal Hypertext Pre-Processor)"
          image={PHPlogo}
        />
      </div>
    </>
  );
};

export default App;
