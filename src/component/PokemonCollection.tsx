import React from "react";
import "./pokemon.css";
import { PokemonDetail, ViewDetail } from "../redux/pokeSlice";
import PokemonList from "./PokemonList";
import { getId } from "../redux/pokeAction";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: ViewDetail;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail } = props;

  const dispatch = useDispatch();

  const handleDetail = async (id: number) => {
    if (!viewDetail.isOpened) {
      dispatch(getId(id) as unknown as AnyAction);
    }
  };

  return (
    <section
      className={
        viewDetail.isOpened
          ? "collection-container-active"
          : "collection-container"
      }
    >
      {viewDetail.isOpened ? (
        <div className="overlay"></div>
      ) : (
        <div className=""></div>
      )}
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} onClick={() => handleDetail(pokemon.id)}>
          <PokemonList
            name={pokemon.name}
            id={pokemon.id}
            abilities={pokemon.abilities}
            image={pokemon.sprites.front_default}
            viewDetail={viewDetail}
          />
        </div>
      ))}
    </section>
  );
};

export default PokemonCollection;
