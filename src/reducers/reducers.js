import { combineReducers } from "redux";
import actions from "../actions/actions";

function loadMorePokemon(state, action) {
    switch(action.type) {
        case actions.REQUEST_POKEMON:
            return {
                loading: true
            };
        case actions.RECEIVE_POKEMON:
            return {
                pokemon: state.pokemon.concat(action.pokemon),
                nextLoadUrl: action.nextLoadUrl,
                loading: false
            };
        default:
            return state;
    }
}

function allPokemon(state = {
    pokemon: [],
    loading: false
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
            return Object.assign({}, state, {
                [action.id]: {
                    loading: true,
                    data: {}
                }
            });
        case actions.RECEIVE_A_POKEMON:
            return Object.assign({}, state, {
                [action.id]: {
                    ...state[action.id],
                    data: {
                        ...action.pokemon
                    }
                }
            });
        case actions.RECEIVE_A_POKEMON_AND_TYPES:
            return Object.assign({}, state, {
                [action.id]: {
                    ...state[action.id],
                    loading: false
                }
            });
        default:
            return state;
    }
}

function pokemonDetailed(state = {}, action) {
    switch(action.type) {
        case actions.REQUEST_A_POKEMON:
        case actions.RECEIVE_A_POKEMON:
        case actions.RECEIVE_A_POKEMON_AND_TYPES:
            return Object.assign({}, state, loadAPokemon(state, action));
        default:
            return state;
    }
}

function loadPokemonType(state, action) {
    switch(action.type) {
        case actions.REQUEST_POKEMON_TYPE:
            return Object.assign({}, state, {
                [action.typeName]: {
                    loading: true
                }
            });
        case actions.RECEIVE_POKEMON_TYPE:
            return Object.assign({}, state, {
                [action.typeName]: {
                    loading: false,
                    ...action.pokemonType
                }
            });
    }
}

function pokemonTypes(state = {}, action) {
    switch(action.type) {
        case actions.RECEIVE_POKEMON_TYPE:
        case actions.REQUEST_POKEMON_TYPE:
            return Object.assign({}, state, loadPokemonType(state, action));
        default:
            return state;
    }
}

/** Home **/

function home(state = {}, action) {
    switch(action.type) {
        case actions.SET_FEATURED_POKEMON:
            return {
                featuredPokemon: action.id
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    allPokemon,
    pokemonDetailed,
    pokemonTypes,
    home
});

export default rootReducer;
