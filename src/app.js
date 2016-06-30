import "babel-polyfill";
import React from "react";
import PokeApi from "./api/PokeApi";

var s = PokeApi.serialise({
    foo: "bar"
});

PokeApi.getAllPokemon("http://pokeapi.co/api/v2/pokemon/?limit=15")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });