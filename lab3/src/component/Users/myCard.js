import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <div className="card">
      <Card.Img variant="top" src={props.logo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>Vote Count: {props.num}</Card.Text>
        <Card.Img src={props.de} />
        </Card.Body>
        </div>
    
  );
}

export default MyCard;
