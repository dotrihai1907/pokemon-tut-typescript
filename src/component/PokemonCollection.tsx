import React from "react";
import "./pokemon.css";
import { Pokemon } from "../redux/pokeSlice";
import PokemonList from "./PokemonList";

interface Props {
  pokemons: Pokemon[];
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons } = props;
  return (
    <div>
      <section className="collection-container">
        {pokemons.map((pokemon) => (
          <PokemonList
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
          />
        ))}
      </section>
    </div>
  );
};

export default PokemonCollection;
