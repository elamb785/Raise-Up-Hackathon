import React from 'react';
// import './Event.css';
import Card from 'react-bootstrap/Card';

function Event({event}) {
  const {name} = event
  return (
    <Card>
        <Card.Body>
            <Card.Title>Event Name: {name}</Card.Title>
            <Card.Text>
            Description: 
            </Card.Text>
        </Card.Body>
        {/* TODO: add button to go to sign up/more details */}
    </Card>
  );
}

export default Event;