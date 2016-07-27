import React from "react";
import { connect } from "react-redux";
import PokemonCard from "./pokemonCard";

const pokemonFeatured = ({ pokemon }) => {
    return (
        <PokemonCard 
            pokemon={pokemon}
        />
    );
}

const mapStateToPokemonFeaturedProps = (state) => {
    return {
        pokemon: state.pokemonDetailed[state.home.featuredPokemon]
    };
}

export default connect(mapStateToPokemonFeaturedProps)(pokemonFeatured);