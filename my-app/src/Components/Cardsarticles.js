import React from 'react';
import { Card } from 'react-bootstrap';
import "./Articles.css";
import { Link } from 'react-router-dom';

function Cardsarticles(props) {
    return (
    <Card className='margin30'>
      <Link style={{ textDecoration: 'none' }} to={"/article?ID="+props.articles.id}>
      <Card.Img variant="top" src={'http://localhost:1337' + props.articles.attributes.Picture.data.attributes.url} />
      <Card.Body>
        <Card.Title className='separation'>{props.articles.attributes.Name}</Card.Title>
        <Card.Text>
          {props.articles.attributes.Price + '$'}
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  );
}

export default Cardsarticles;