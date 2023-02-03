import React from 'react';
import { Card } from 'react-bootstrap';

const PokeCard = ({ pokemon }) => {
  const { id, name, sprites } = pokemon;
  return (
    <Card>
      <Card.Img
        src={sprites.front_default}
        variant="top"
        className="bg-light"
      />
      <Card.Body>
        <Card.Title>{name.toUpperCase()}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
