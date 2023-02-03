import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemons/pokemons';

export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});
