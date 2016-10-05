import React, { Component } from "react";
import actions from "../actions/actions";
import { connect } from "react-redux";
import PokemonCard from "./pokemon/pokemonCard";
import AnimatedThumbnail from "../utilities/AnimatedThumbnail";
import PokeUtilities from "../utilities/PokeUtilities";
import DamageRelations from "./pokemon/DamageRelations";

const PokemonPage = ({ params, pokemon, types, getPokemonDetails }) => {

    if(!pokemon) {
        getPokemonDetails(params.pokemonId);
    }

    const loadPokemonCard = () => {
        if(pokemon) {
            return (
                <PokemonCard
                    pokemon={pokemon}
                    miniCard={true}
                />
            );
        }
    }

    const getPokemonTypes = () => {
        if(pokemon && !pokemon.loading) {
            return pokemon.data.types.map(type => types[type.type.name]);
        }
    }

    return (
        <div className="container">
            <div className="wrapper">
                {loadPokemonCard()}
            </div>
            <div className="wrapper">
                <DamageRelations types={getPokemonTypes()} />
            </div>
        </div>
    );
}

const mapStateToPokemonPageProps = (state, ownProps) => {
    return {
        pokemon: state.pokemonDetailed[ownProps.params.pokemonId],
        types: state.pokemonTypes
    };
}

const mapDispatchToPokemonPageProps = (dispatch) => {
    return {
        getPokemonDetails: (pokemonId) => {
            dispatch(actions.getAPokemonAndTypes(Number(pokemonId)));
        }
    };
}

export default connect(
    mapStateToPokemonPageProps,
    mapDispatchToPokemonPageProps
)(PokemonPage);
