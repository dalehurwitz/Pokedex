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

actions.getPokemon = () => {
    return (dispatch, getState) => {
        var params,
            nextLoadUrl = getState().allPokemon.nextLoadUrl;

        dispatch(actions.requestPokemon());

        if(nextLoadUrl) {
            params = nextLoadUrl;
        } else {
            params = {
                limit: config.POKERMON_PER_LOAD
            };
        }
        return PokeApi.getAllPokemon(params)
            .then(data => {
                dispatch(actions.receivePokemon(data));
            });
    }
};

/** Get individual pokemon **/

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
        pokemon: response,
        id
    };
}

actions.RECEIVE_A_POKEMON_AND_TYPES = "RECEIVE_A_POKEMON_AND_TYPES";
actions.receiveAPokemonAndTypes = (id) => {
    return {
        type: actions.RECEIVE_A_POKEMON_AND_TYPES,
        id
    };
}

actions.getAPokemon = (id) => {
    return (dispatch, getState) => {
        if(typeof id === "string" && Number(id) === NaN) {
            var splitUrl = id.split("/");
            id = splitUrl[splitUrl.length-2];
        }
        var state = getState();
        if(!state.pokemonDetailed || !state.pokemonDetailed[id] || !state.pokemonDetailed[id].data) {
            dispatch(actions.requestAPokemon(id));
            return PokeApi.getAPokemon(id)
                .then(data => {
                    dispatch(actions.receiveAPokemon(id, data));
                });
        } else {
            return Promise.resolve();
        }
    };
};

/*
    Pokemon may have several types, i.e. "bug", "steel". We need to fetch the pokemon first,
    then we need to fetch the data for all of its types. Only then has the pokemon finished 'loading'
*/
actions.getAPokemonAndTypes = (id) => {
    return (dispatch, getState) => {
        dispatch(actions.getAPokemon(id))
            .then(() => {
                let state = getState(),
                    typePromises = [];
                //Create a promise for each pokemon 'type'
                state.pokemonDetailed[id].data.types.forEach(type => {
                    typePromises.push(dispatch(actions.getPokemonType(type.type.name)));
                });
                return Promise.all(typePromises);
            })
            .then(() => {
                dispatch(actions.receiveAPokemonAndTypes(id));
            });
    };
};

/*** Get Pokemon types ***/

actions.REQUEST_POKEMON_TYPE = "REQUEST_POKEMON_TYPE";
actions.requestPokemonType = (typeName) => {
    return {
        type: actions.REQUEST_POKEMON_TYPE,
        typeName: typeName
    }
}

actions.RECEIVE_POKEMON_TYPE = "RECEIVE_POKEMON_TYPE";
actions.receivePokemonType = (typeName, response) => {
    return {
        type: actions.RECEIVE_POKEMON_TYPE,
        typeName: typeName,
        pokemonType: response
    };
}

actions.getPokemonType = (typeName) => {
    return (dispatch, getState) => {
        let state = getState();
        if(!state.pokemonTypes || !state.pokemonTypes[typeName]) {
            dispatch(actions.requestPokemonType(typeName));
            return PokeApi.getPokemonType(typeName)
                .then(data => {
                    dispatch(actions.receivePokemonType(typeName, data));
                });
        } else {
            return Promise.resolve();
        }
    };
}

/** Home **/

actions.GET_FEATURED_POKEMON = "GET_FEATURED_POKEMON";
actions.getFeaturedPokemon = (id) => {
    return {
        type: actions.GET_FEATURED_POKEMON,
        id
    };
};
actions.SET_FEATURED_POKEMON = "SET_FEATURED_POKEMON";
actions.setFeaturedPokemon = (id) => {
    return {
        type: actions.SET_FEATURED_POKEMON,
    };
};

actions.loadFeaturedPokemon = () => {
    let randomPokemonId = Math.ceil(Math.random() * config.TOTAL_POKEMON);
    return (dispatch) => {
        Promise.all([
            dispatch(actions.getFeaturedPokemon(randomPokemonId)),
            dispatch(actions.getAPokemonAndTypes(randomPokemonId))
        ]).then(() => {
            dispatch(actions.setFeaturedPokemon());
        });
    };
}

/** init app **/
actions.REQUEST_INITIAL_POKEMON_LOAD = "REQUEST_INITIAL_POKEMON_LOAD";
actions.requestInitialPokemonLoad = () => {
    return {
        type: actions.REQUEST_INITIAL_POKEMON_LOAD,
        loading: true
    };
}

actions.RECEIVE_INITIAL_POKEMON_LOAD = "RECEIVE_INITIAL_POKEMON_LOAD";
actions.receiveInitialPokemonLoad = () => {
    return {
        type: actions.RECEIVE_INITIAL_POKEMON_LOAD,
        loading: false
    };
}

actions.initApp = () => {
    return (dispatch, getState) => {
        let state = getState();

        if(state.allPokemon.pokemon.length < config.POKERMON_PER_LOAD) {
            dispatch(actions.requestInitialPokemonLoad());
            dispatch(actions.getPokemon())
                .then(() => {
                    dispatch(actions.receiveInitialPokemonLoad());
                });
        }

        if(!state.home || !state.home.featuredPokemon) {
            dispatch(actions.loadFeaturedPokemon());
        }
    };
}

export default actions;
