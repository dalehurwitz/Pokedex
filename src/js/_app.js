import "babel-polyfill";
import React from "react";
import PokeApi from "./api/PokeApi";
import actions from "./actions/actions";
import reducer from "./reducers/reducers";
import configureStore from "./store/store";

const store = configureStore();

store.dispatch(actions.getPokemon());

setTimeout(function() {
    store.dispatch(actions.getPokemon("http://pokeapi.co/api/v2/pokemon/?limit=15&offset=15"));
}, 10000)

var s = PokeApi.serialise({
    foo: "bar"
});

// PokeApi.getAllPokemon("http://pokeapi.co/api/v2/pokemon/?limit=15")
//     .then((data) => {
//         console.log(actions.receivePokemon(data));
//     })
//     .catch((err) => {
//         // console.log(err);
//     });
