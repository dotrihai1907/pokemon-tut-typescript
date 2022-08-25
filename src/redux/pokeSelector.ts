import { createSelector } from "reselect";

const selectPokeReducer = (state: any) => state.pokeReducer;

export const selectLoading = createSelector(
  [selectPokeReducer],
  (pokeSlice) => pokeSlice?.loading
);

export const selectPokemons = createSelector(
  [selectPokeReducer],
  (pokeSlice) => pokeSlice?.pokemons
);
