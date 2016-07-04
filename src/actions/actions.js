import PokeApi from "../api/PokeApi";

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
        pokemon: response.results.slice()
    }
}

actions.getPokemom = (url = "http://pokeapi.co/api/v2/pokemon/?limit=15") => {
    return (dispatch) => {
        dispatch(actions.requestPokemon());
        return PokeApi.getAllPokemon(url)
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
