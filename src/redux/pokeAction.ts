import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  loading,
  loadingDone,
  getPokemonsSuccess,
  Pokemons,
} from "./pokeSlice";

export const getPokemons = () => async (dispatch: Dispatch) => {
  dispatch(loading());
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
    );
    console.log(res.data);
    res.data.results.map(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      dispatch(getPokemonsSuccess(poke.data));
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loadingDone());
  }
};
