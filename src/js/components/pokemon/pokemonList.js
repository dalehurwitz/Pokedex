import React from "react";
import { connect } from "react-redux";
import PokemonThumb from "./pokemonThumb";
import actions from "../../actions/actions";
import LoadMore from "../elements/loadMore";
import config from "../../config";

const PokemonList = ({ pokemon, loading, onLoadMore }) => {
    const getAnimationDelay = index => {
        return {
            animationDelay: (index++ % config.POKERMON_PER_LOAD) / config.POKERMON_PER_LOAD * 500 + "ms"
        }
    };

    const renderPokemon = () => {
        return (
            <div>
                <ul className="list list--pad">
                    {pokemon.map((pokemon, index) =>
                        <li
                            className="list__thumbnail list__thumbnail--link"
                            key={pokemon.name+index}
                            style={getAnimationDelay(index)}
                        >
                            <div className="list__thumbnail__inner panel panel--hover">
                                <PokemonThumb
                                    pokemon={pokemon}
                                    index={index+1}
                                />
                            </div>
                        </li>
                    )}
                </ul>
                <LoadMore onClick={onLoadMore} loading={loading.more} />
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
        if(loading.initial) {
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
        loading: {
            more: state.allPokemon.loading,
            initial: state.home.loadingPokemon
        }
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
