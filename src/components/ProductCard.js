import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'bootstrap';
function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            Price: ${props.price}
        </Card.Text>
        <Card.Title>
            {props.status}
        </Card.Title>
        <button>Add to Cart</button>
      </Card.Body>
    </Card>   
  )
}

export default Cards
