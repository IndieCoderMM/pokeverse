import { Col, Container, Row } from 'react-bootstrap';
import PokeCard from './components/PokeCard';

function App() {
  const pokemons = [
    {
      name: 'clefairy',
      id: 1,
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
      },
      height: 23,
      weight: 64,
      exp: 5,
    },
    {
      name: 'clefairy',
      id: 1,
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
      },
      height: 23,
      weight: 64,
      exp: 5,
    },
    {
      name: 'clefairy',
      id: 1,
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
      },
      height: 23,
      weight: 64,
      exp: 5,
    },
  ];
  return (
    <Container className="p-2">
      <h1>Pokeverse</h1>
      <Row md={4}>
        {pokemons.map((poke) => (
          <Col className="p-1">
            <PokeCard key={poke.id} pokemon={poke} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
