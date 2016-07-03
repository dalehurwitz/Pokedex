import "babel-polyfill";
import React from "react";
import PokeApi from "./api/PokeApi";
import actions from "./actions/actions";

var s = PokeApi.serialise({
    foo: "bar"
});

PokeApi.getAllPokemon("http://pokeapi.co/api/v2/pokemon/?limit=15")
    .then((data) => {
        console.log(actions.receivePokemon(data));
    })
    .catch((err) => {
        // console.log(err);
    });
