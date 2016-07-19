import { combineReducers } from "redux";
import actions from "../actions/actions";

function loadMorePokemon(state, action) {
    switch(action.type) {
        case actions.REQUEST_POKEMON:
            return {
                loadingPokemon: true
            };
        case actions.RECEIVE_POKEMON:
            return {
                pokemon: state.pokemon.concat(action.pokemon),
                nextLoadUrl: action.nextLoadUrl,
                loadingPokemon: false
            };
        default:
            return state;
    }
}

function allPokemon(state = {
    pokemon: [],
    loadingPokemon: false
}, action) {
    switch(action.type) {
        case actions.REQUEST_POKEMON:
        case actions.RECEIVE_POKEMON:
            return Object.assign({}, state, loadMorePokemon(state, action));
        default:
            return state;
    }
}

function loadAPokemon(state, action) {
    switch(action.type) {
        case actions.REQUEST_A_POKEMON:
            var newPokemon = {};
            newPokemon[action.id] = {
                loading: true
            };
            return Object.assign({}, state, newPokemon);
        case actions.RECEIVE_A_POKEMON:
            var pokemon = {};
            pokemon[action.id] = {
                ...action.pokemon,
                loading: false
            };
            return Object.assign({}, state, pokemon);
        default:
            return state;
    }
}

function pokemonDetailed(state = {}, action) {
    switch(action.type) {
        case actions.REQUEST_A_POKEMON:
        case actions.RECEIVE_A_POKEMON:
            return Object.assign({}, state, loadAPokemon(state, action));
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    allPokemon,
    pokemonDetailed
});

export default rootReducer;
