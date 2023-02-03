import axios from 'axios';

const getPokeList = () => axios.get('https://pokeapi.co/api/v2/pokemon');

const getPokeDetail = (url) => axios.get(url);

const PokeService = { getPokeList, getPokeDetail };

export default PokeService;
