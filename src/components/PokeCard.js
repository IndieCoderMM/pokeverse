import React from 'react';
import { Badge, Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/pokemons/pokemons';

const PokeCard = ({ pokemon }) => {
  const { id, name, sprites, exp, height, weight, favorite } = pokemon;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

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
        {favorite ? (
          <Button variant="danger" className="mt-1" onClick={handleClick}>
            Remove Favorite
          </Button>
        ) : (
          <Button variant="primary" className="mt-1" onClick={handleClick}>
            Add to Favorite
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
