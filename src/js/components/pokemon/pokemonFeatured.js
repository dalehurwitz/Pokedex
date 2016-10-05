import React from "react";
import { connect } from "react-redux";
import PokemonCard from "./pokemonCard";

const pokemonFeatured = ({ pokemon }) => {
    return (
        <div>
            <PokemonCard
                pokemon={pokemon}
                title="Featured Pokemon"
                link={true}
                linkLabel={(
                    <span>
                        See more about&nbsp;
                        <span className="capitalise">{pokemon.data.name}</span>
                    </span>
                )}
            />
        </div>
    );
}

const mapStateToPokemonFeaturedProps = (state) => {
    return {
        pokemon: state.pokemonDetailed[state.home.featuredPokemon]
    };
}

export default connect(mapStateToPokemonFeaturedProps)(pokemonFeatured);
