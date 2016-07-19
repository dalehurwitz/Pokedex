import React from "react";
import Link from "react-router/lib/Link";

const Pokemon = ({ pokemon, index }) => {
    return (
        <Link 
            to="/"
        >
            <div><span>{index} </span>{pokemon.name}</div>
        </Link>
    );
};

export default Pokemon;