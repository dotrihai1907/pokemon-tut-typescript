import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoading,
  selectNextUrl,
  selectPokemons,
  selectViewDetail,
} from "./redux/pokeSelector";
import { getPokemons, nextPage } from "./redux/pokeAction";
import PokemonCollection from "./component/PokemonCollection";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  const loading = useSelector(selectLoading);
  const pokemons = useSelector(selectPokemons);
  const nextUrl = useSelector(selectNextUrl);
  const viewDetail = useSelector(selectViewDetail);

  const loadMore = () => {
    dispatch(nextPage(nextUrl));
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection pokemons={pokemons} viewDetail={viewDetail} />
        {!viewDetail.isOpened && (
          <div className="btn">
            <button onClick={loadMore}>
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
