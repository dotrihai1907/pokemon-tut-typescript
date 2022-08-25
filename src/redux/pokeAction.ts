import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  loading,
  loadingDone,
  getPokemonsSuccess,
  Pokemons,
  getNextUrlSuccess,
  getIdSuccess,
  closeDetailSuccess,
} from "./pokeSlice";

export const getPokemons = () => async (dispatch: Dispatch) => {
  dispatch(loading());
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
    );
    dispatch(getNextUrlSuccess(res.data.next));
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

export const nextPage = (nextUrl: string) => async (dispatch: Dispatch) => {
  dispatch(loading());
  try {
    const res = await axios.get(nextUrl);
    dispatch(getNextUrlSuccess(res.data.next));
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

export const getId = (id: number) => async (dispatch: Dispatch) => {
  dispatch(getIdSuccess({ id, isOpened: true }));
};

export const closeDetail = () => async (dispatch: Dispatch) => {
  dispatch(closeDetailSuccess({ id: 0, isOpened: false }));
};
