import PokeApi from "../api/PokeApi";
import config from "../config.js";

const actions = {};

/** Initial load / Load more **/

actions.LOAD_MORE_POKEMON = "LOAD_MORE_POKEMON";
actions.loadMorePokemon = () => {
    return {
        type: actions.LOAD_MORE_POKEMON
    }
}

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

/** Select individual pokemon **/

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

export default actions;
