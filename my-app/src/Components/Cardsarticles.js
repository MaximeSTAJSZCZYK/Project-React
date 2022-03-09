import React from 'react';
import { Card } from 'react-bootstrap';
import "./Articles.css";


<<<<<<< Updated upstream
function Cardsarticles(props) {
  return (
=======
    return <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>
                Article 1
                {/* 
                this.state.data.attributes.name
                */}
            </Card.Title>
            <Card.Text>
                Description article
            </Card.Text>
        </Card.Body>
    </Card>
>>>>>>> Stashed changes

    <Card style={{ width: '15rem' }}>
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