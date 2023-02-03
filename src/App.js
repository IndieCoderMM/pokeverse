import { Col, Container, Row } from 'react-bootstrap';
import PokeCard from './components/PokeCard';

function App() {
  const pokemons = [
    {
      id: 1,
      name: 'clefairy',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
      },
      height: 13,
      weight: 44,
      exp: 5,
    },
  ];
  return (
    <Container className="p-2">
      <h1>Pokeverse</h1>
      <Row md={4}>
        {pokemons.map((poke) => (
          <Col className="p-1" key={poke.id}>
            <PokeCard pokemon={poke} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
