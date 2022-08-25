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
export interface ViewDetail {
  id: number;
  isOpened: boolean;
}

export interface Ability {
  ability: {
    name: string;
  };
}
export interface PokemonDetail extends Pokemon {
  abilities?: Ability[];
}
interface InitialState {
  loading: boolean;
  pokemons: Pokemon[];
  nextUrl: string;
  viewDetail: ViewDetail;
}
const initialState: InitialState = {
  loading: false,
  pokemons: [],
  nextUrl: "",
  viewDetail: {
    id: 0,
    isOpened: false,
  },
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
    getNextUrlSuccess: (state, action) => {
      state.nextUrl = action.payload;
    },
    getIdSuccess: (state, action) => {
      state.viewDetail = action.payload;
    },
    closeDetailSuccess: (state, action) => {
      state.viewDetail = action.payload;
    },
  },
});

export const {
  loading,
  loadingDone,
  getPokemonsSuccess,
  getNextUrlSuccess,
  getIdSuccess,
  closeDetailSuccess,
} = pokeSlice.actions;

export default pokeSlice.reducer;
