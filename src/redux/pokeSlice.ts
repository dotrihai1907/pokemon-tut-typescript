import { createSlice } from "@reduxjs/toolkit";

export interface Pokemons {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

interface InitialState {
  loading: boolean;
  pokemons: Pokemon[];
}
const initialState: InitialState = {
  loading: false,
  pokemons: [],
};

const pokeSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loadingDone: (state) => {
      state.loading = false;
    },
    getPokemonsSuccess: (state, action) => {
      state.pokemons = [...state.pokemons, action.payload];
    },
  },
});

export const { loading, loadingDone, getPokemonsSuccess } = pokeSlice.actions;

export default pokeSlice.reducer;
