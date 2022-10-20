import Card from 'react-bootstrap/Card';

export default function card(props) {

  return (
    <Card style={{width : '20rem', height: '25rem'}}>
      <Card.Body>
        <Card.Img variant="top" src={props.image} style={{width: "80%",margin:"0px auto 5rem",display: "block"}}/>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        </Card.Body>
    </Card>
  );
}