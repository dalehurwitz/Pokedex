import React from "react";
import { connect } from "react-redux";

const pokemonCard = ({ pokemon }) => {

    const pokemonCardHandler = () => {
        if(pokemon.loading) {
            return (
                <div>Loading featured pokemon...</div>
            );
        } else {
            return (
                <div>
                    <div>{pokemon.data.name}</div>
                </div>
            );
        }
    }

    return (
        <div className="card">
            <div>Featured Pokemon</div>
            {pokemonCardHandler()}
        </div>
    );
}

export default pokemonCard;