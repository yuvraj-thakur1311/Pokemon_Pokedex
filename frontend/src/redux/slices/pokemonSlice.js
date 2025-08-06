import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({

  name: 'pokemon',

  initialState: [],

  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
    },
    removePokemon: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    },
    updatePokemon: (state, action) => {
      return state.map(p => p.id === action.payload.id ? action.payload : p);
    },
  }
  
});

export const { addPokemon, removePokemon, updatePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
