import React from "react";
import CardElement from "./components/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardGrid({ title1,image1, title2,image2,title3,image3,title4,image4}) {
  return (
    <Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Col xs="10" sm="10" md="6" lg="3" xl="3" >
        <CardElement
          title={title1}
          image={image1}
        />
      </Col>
      <Col xs="10" sm="10" md="6" lg="3" xl="3">
        <CardElement
          title={title2}
          image={image2}
        />
      </Col>
      <Col xs="10" sm="10" md="6" lg="3" xl="3">
        <CardElement title={title3} image={image3} />
      </Col>
      <Col xs="10" sm="10" md="6" lg="3" xl="3">
        <CardElement
          title={title4}
          image={image4}
        />
      </Col>
    </Row>
  );
}

export default CardGrid;
