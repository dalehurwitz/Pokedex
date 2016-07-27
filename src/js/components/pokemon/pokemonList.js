import React from "react";
import { connect } from "react-redux";
import PokemonThumb from "./pokemonThumb";

const PokemonList = ({ pokemon, loading }) => {

    const renderPokemon = () => {
        return (
            <ul className="list list--pad">
                {pokemon.map((pokemon, index) =>
                    <li className="list__thumbnail list__thumbnail--link" key={pokemon.name}>
                        <div className="list__thumbnail__inner">
                            <PokemonThumb 
                                pokemon={pokemon}
                                index={index+1}
                            />
                        </div>
                    </li>
                )}
            </ul>
        );
    };

    const renderLoader = () => {
        return (
            <div className="wrapper">
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