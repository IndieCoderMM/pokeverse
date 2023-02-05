import { Col, Container, Row } from 'react-bootstrap';
import PokeCard from './components/PokeCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './redux/pokemons/pokemons';

function App() {
  const pokemons = useSelector((state) => state.pokemons.data);
  const status = useSelector((state) => state.pokemons.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getPokemons());
  }, [status, dispatch]);

  const totalFavorite = pokemons.filter((p) => p.favorite).length;
  return (
    <Container className="p-2">
      <h1>Pokeverse</h1>
      <h3>Favorites : ❤ {totalFavorite}</h3>
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
