import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PokeService from '../../services/PokeService';

export const getPokemons = createAsyncThunk('pokemons/get', async () => {
  try {
    const pokeListRes = await PokeService.getPokeList();
    const pokeListData = pokeListRes.data.results;
    let pokemons = await Promise.all(
      pokeListData.map(async (data) => {
        const res = await PokeService.getPokeDetail(data.url);
        const {
          id,
          name,
          sprites,
          weight,
          height,
          base_experience: exp,
        } = res.data;
        return {
          id,
          name,
          sprites,
          weight,
          height,
          exp,
        };
      }),
    );
    return pokemons;
  } catch (err) {
    console.log(err);
    return err.message;
  }
});

const initialState = {
  status: 'idle',
  data: [],
  error: '',
};

const pokeSlice = createSlice({
  name: 'pokemons',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPokemons.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export default pokeSlice.reducer;
