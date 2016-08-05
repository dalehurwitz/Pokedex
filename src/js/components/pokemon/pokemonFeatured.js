import React from "react";
import { connect } from "react-redux";
import PokemonCard from "./pokemonCard";

const pokemonFeatured = ({ pokemon }) => {
    return (
        <PokemonCard
            miniCard="true"
            pokemon={pokemon}
            title="Featured Pokemon"
        />
    );
}

const mapStateToPokemonFeaturedProps = (state) => {
    return {
        pokemon: state.pokemonDetailed[state.home.featuredPokemon]
    };
}

export default connect(mapStateToPokemonFeaturedProps)(pokemonFeatured);