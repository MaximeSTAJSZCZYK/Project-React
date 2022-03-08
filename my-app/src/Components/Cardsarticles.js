import React from 'react'
import { Card } from 'react-bootstrap'
import "./Articles.css";

function Cardsarticles() {

    return <Card style={{ width: '15rem' }}>
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

}

export default Cardsarticles;