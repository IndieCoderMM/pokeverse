import React from 'react';
import { Badge, Card, ListGroup } from 'react-bootstrap';

const PokeCard = ({ pokemon }) => {
  const { name, sprites, exp, height, weight } = pokemon;
  return (
    <Card>
      <Card.Img
        src={sprites.front_default}
        variant="top"
        style={{ backgroundColor: '#9b59b6' }}
      />
      <Card.Body>
        <Card.Title>{name.toUpperCase()}</Card.Title>
        <ListGroup horizontal className="text-center">
          <ListGroup.Item>
            Exp <Badge pill>{exp}</Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            Height <Badge pill>{height}</Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            Weight <Badge pill>{weight}</Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
