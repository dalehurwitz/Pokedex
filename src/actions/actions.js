import PokeApi from "../api/PokeApi";
import config from "../config.js";

const actions = {};

/** Get many pokemon **/

actions.REQUEST_POKEMON = "REQUEST_POKEMON";
actions.requestPokemon = () => {
    return {
        type: actions.REQUEST_POKEMON
    }
}

actions.RECEIVE_POKEMON = "RECEIVE_POKEMON";
actions.receivePokemon = (response) => {
    return {
        type: actions.RECEIVE_POKEMON,
        pokemon: response.results.slice(),
        nextLoadUrl: response.next
    }
}

actions.getPokemom = () => {
    return (dispatch, getState) => {
        var params;
        dispatch(actions.requestPokemon());
        var nextLoadUrl = getState().allPokemon.nextLoadUrl;
        if(nextLoadUrl) {
            params = nextLoadUrl;
        } else {
            params = {
                limit: config.POKERMON_PER_LOAD
            };
        }
        return PokeApi.getAllPokemon(params)
            .then(data => {
                dispatch(actions.receivePokemon(data))
            });
    }
}

/** Get individual pokemon **/

actions.SELECT_A_POKEMON = "SELECT_A_POKEMON";
actions.requestAPokemon = (id) => {
    return {
        type: actions.SELECT_A_POKEMON,
        id
    }
}

actions.REQUEST_A_POKEMON = "REQUEST_A_POKEMON";
actions.requestAPokemon = (id) => {
    return {
        type: actions.REQUEST_A_POKEMON,
        id
    }
}

actions.RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
actions.receiveAPokemon = (id, response) => {
    return {
        type: actions.RECEIVE_A_POKEMON,
        pokemon: response.results.slice(),
        id
    }
}

/** init app **/

actions.initApp = () => {
    return (dispatch, getState) => {
        var state = getState();
        if(state.featuredPokemon && state.pokemonDetailed[state.featuredPokemon].loading === false) {
            return Promise.resolve();
        }
        //to complete
    }
}

export default actions;
