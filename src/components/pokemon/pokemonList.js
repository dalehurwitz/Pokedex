import React from "react";
import { connect } from "react-redux";
import PokemonThumb from "./pokemonThumb";

const PokemonList = ({ pokemon, loading }) => {

    const renderPokemon = () => {
        return pokemon.map((pokemon, index) =>
            <PokemonThumb 
                pokemon={pokemon}
                index={index+1}
                key={pokemon.name}
            />
        );
    };

    const renderLoader = () => {
        return (
            <div>
                Loading pokemon...
            </div>
        )
    };

    const pokemonListHandler = () => {
        if(loading) {
            return renderLoader();
        }
        return renderPokemon();
    };

    return (
        <div>
            {pokemonListHandler()}
        </div>
    );
}

const mapStateToPokemonListProps = (state) => {
    return {
        pokemon: state.allPokemon.pokemon,
        loading: state.allPokemon.loading
    };
};

export default connect(mapStateToPokemonListProps)(PokemonList);