const actions = {};

actions.GET_POKEMON = "GET_POKEMON";
actions.getPokemon = () => {
    return {
        type: actions.GET_POKEMON
    }
}

actions.RECEIVE_POKEMON = "RECEIVE_POKEMON";
actions.receivePokemon = (response) => {
    return {
        type: actions.RECEIVE_POKEMON,
        pokemon: response.results.slice()
    }
}

actions.GET_A_POKEMON = "GET_A_POKEMON";
actions.getAPokemon = (id) => {
    return {
        type: actions.GET_A_POKEMON,
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
