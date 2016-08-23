import React from "react";
import { connect } from "react-redux";
import PokemonThumb from "./pokemonThumb";
import actions from "../../actions/actions";

const PokemonList = ({ pokemon, loading, onLoadMore }) => {
    const renderPokemon = () => {
        return (
            <div>
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
                <div>
                    <button onClick={onLoadMore} >
                        Load More
                    </button>
                </div>
            </div>
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

const mapDispatchToPokemonListProps = (dispatch) => {
    return {
        onLoadMore: () => {
            dispatch(actions.getPokemon());
        }
    };
}

export default connect(
    mapStateToPokemonListProps,
    mapDispatchToPokemonListProps
)(PokemonList);
