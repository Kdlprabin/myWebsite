import Card from 'react-bootstrap/Card';


export default function card(props) {

  return (
    <Card className="my-5">
      <Card.Body>
        <Card.Img variant="top" src={props.image} style={{width: "80%",margin:"0px auto 5rem",display: "block"}}/>
        <Card.Title>{props.title}</Card.Title>
        </Card.Body>
    </Card>
  );
}