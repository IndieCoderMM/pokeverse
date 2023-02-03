import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PokeCard from './components/PokeCard';
import { getPokemons } from './redux/pokemons/pokemons';

function App() {
  const pokemons = useSelector((state) => state.pokemons.data);
  const status = useSelector((state) => state.pokemons.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getPokemons());
  }, [status, dispatch]);

  return (
    <Container className="p-2">
      <h1>Pokeverse</h1>
      <Row lg={4}>
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
