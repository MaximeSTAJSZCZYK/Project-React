import React from 'react'
import { Card } from 'react-bootstrap'
import "./Articles.css";


function Cardsarticles() {
    
    return <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Article 1</Card.Title>
            <Card.Text>
                Description article
            </Card.Text>
        </Card.Body>

        <div className='Article'>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Article 1</Card.Title>
        <Card.Text>
            Description article
        </Card.Text>
    </Card.Body>
    </div>
</Card>

}

export default Cardsarticles;