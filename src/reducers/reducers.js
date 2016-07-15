import { combineReducers } from "redux";
import actions from "../actions/actions";

function selectAPokemon(state = 1, action) {
    switch (action.type) {
        case actions.GET_A_POKEMON:
            return action.id;
        default:
            return state;
    }
}

function loadMorePokemon(state, action) {
    switch(action.type) {
        case actions.REQUEST_POKEMON:
            return Object.assign({}, state, {
                loadingPokemon: true
            });
        case actions.RECEIVE_POKEMON:
            return Object.assign({}, state, {
                pokemon: state.pokemon.concat(action.pokemon),
                nextLoadUrl: action.nextLoadUrl,
                loadingPokemon: false
            });
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

const rootReducer = combineReducers({
    allPokemon
});

export default rootReducer;