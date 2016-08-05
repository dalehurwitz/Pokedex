import React from "react";
import { connect } from "react-redux";
import PokeUtilities from "../../utilities/PokeUtilities";

const pokemonCard = ({ pokemon, title, miniCard }) => {
    const pokemonCardHandler = () => {
        if(pokemon.loading) {
            return (
                <div>Loading featured pokemon...</div>
            );
        } else {
            let height = PokeUtilities.getHeight(pokemon.data.height),
                weight = PokeUtilities.getWeight(pokemon.data.weight);
            return (
                <div className="card__content">
                    <figure className="card__thumbnail">
                        {/*<img className="list__thumbnail__img" src={`images/pokemon/${pokemon.data.id}.png`} alt=""/>*/}
                        <img src="https://placehold.it/150/749DAB/ffffff" alt={pokemon.data.name} width="150" height="150" />
                    </figure>
                    <section className="card__details">
                        <h2 className="card__title">{pokemon.data.name}</h2>
                        <div className="card__types">
                            {pokemon.data.types.map((type, index) => {
                                return ( 
                                    <span key={index}>{type.type.name}</span> 
                                );
                            })}
                        </div>
                        <div>
                            <span>Height: </span>
                            <span>{`${height.metric} / ${height.imperial}`}</span>{/* 3.9 x height value from api = height in inches */}
                        </div>
                        <div>
                            <span>Weight: </span>
                            <span>{`${weight.metric} / ${weight.imperial}`}</span>
                        </div>
                    </section>
                </div>
            );
        }
    }

    const cardTitle = () => {
        if(title) {
            return (
                <div className="card__badge card__inner">{title}</div>
            );
        }
    }

    const cardInnerHandler = () => {
        let className = "card__inner" + (title ? " card__inner--has-badge":"");
        return (
            <div className={className}>
                {pokemonCardHandler()}
            </div>
        );
    }

    const getCardClasses = () => {
        let className = "card";
        if(miniCard) {
            className += " card--mini";
        }
        return className;
    }

    return (
        <div className={getCardClasses()}>
            {cardTitle()}
            {cardInnerHandler()}
        </div>
    );
}

export default pokemonCard;