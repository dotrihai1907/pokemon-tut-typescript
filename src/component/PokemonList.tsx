import { AnyAction } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeDetail } from "../redux/pokeAction";
import { ViewDetail } from "../redux/pokeSlice";
import "./pokemon.css";

interface Props {
  name: string;
  id: number;
  image: string;
  abilities:
    | {
        ability: { name: string };
      }[]
    | undefined;
  viewDetail: ViewDetail;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail } = props;

  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsSelected(id === viewDetail?.id);
  }, [id, viewDetail]);

  const handleClose = () => {
    dispatch(closeDetail() as unknown as AnyAction);
  };

  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={handleClose}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt={name} className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <div className="detail-ability">Abilities:</div>
              {abilities?.map((x, index) => (
                <div key={index}>{x.ability.name}</div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt={name} />
          <div className="detail-skill"></div>
        </section>
      )}
    </div>
  );
};

export default PokemonList;
