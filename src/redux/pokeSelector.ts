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

export const selectNextUrl = createSelector(
  [selectPokeReducer],
  (pokeSlice) => pokeSlice?.nextUrl
);

export const selectViewDetail = createSelector(
  [selectPokeReducer],
  (pokeSlice) => pokeSlice?.viewDetail
);
