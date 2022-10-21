import React from "react";
import CardElement from "./components/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardGrid({ HTMLlogo, CSSlogo, JSlogo, PHPlogo }) {
  return (
    <Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Col xs="10" sm="10" md="6" lg="3" xl="3" >
        <CardElement
          title="HTML"
          image={HTMLlogo}
        />
      </Col>
      <Col xs="10" sm="10" md="6" lg="3" xl="3">
        <CardElement
          title="CSS"
          image={CSSlogo}
        />
      </Col>
      <Col xs="10" sm="10" md="6" lg="3" xl="3">
        <CardElement title="JS" image={JSlogo} />
      </Col>
      <Col xs="10" sm="10" md="6" lg="3" xl="3">
        <CardElement
          title="PHP"
          image={PHPlogo}
        />
      </Col>
    </Row>
  );
}

export default CardGrid;
