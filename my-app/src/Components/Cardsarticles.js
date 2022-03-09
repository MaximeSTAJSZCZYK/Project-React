import React from 'react';
import { Card } from 'react-bootstrap';
import "./Articles.css";

function Cardsarticles(props) {
    return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={'http://localhost:1337' + props.articles.attributes.Picture.data.attributes.url} />
      <Card.Body>
        <Card.Title>{props.articles.attributes.Name}</Card.Title>
        <Card.Text>
          {props.articles.attributes.Price + '$'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardsarticles;