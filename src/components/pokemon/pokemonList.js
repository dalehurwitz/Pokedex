import React from "react";
import { connect } from "react-redux";
import PokemonThumb from "./pokemonThumb";

const PokemonList = ({ pokemon }) => {
    return (
        <div>
            {pokemon.map((pokemon, index) =>
                <PokemonThumb 
                    pokemon={pokemon}
                    index={index+1}
                    key={pokemon.name}
                />
            )}
        </div>
    );
}

const mapStateToPokemonListProps = (state) => {
    return {
        pokemon: state.allPokemon.pokemon
    };
};

export default connect(mapStateToPokemonListProps)(PokemonList);