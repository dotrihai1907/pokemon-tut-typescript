import React, { useEffect, useState } from "react";
import "./App.css";
import { Pokemon } from "./redux/pokeSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectPokemons } from "./redux/pokeSelector";
import { getPokemons } from "./redux/pokeAction";
import PokemonCollection from "./component/PokemonCollection";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  const loading = useSelector(selectLoading);
  const pokemons = useSelector(selectPokemons);

  const [pokeList, setPokeList] = useState<Pokemon[]>(pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection pokemons={pokemons} />
      </div>
    </div>
  );
};

export default App;
