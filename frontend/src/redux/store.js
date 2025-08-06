import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from './slices/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice
  },
//   devTools: process.env.NODE_ENV !== 'production'
});

export default store;
