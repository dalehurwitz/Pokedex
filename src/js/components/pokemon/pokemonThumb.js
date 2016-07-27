import React from "react";
import Link from "react-router/lib/Link";

const Pokemon = ({ pokemon, index }) => {
    return (
        <Link 
            to="/"
        >
            <figure className="list__thumbnail__img">
                {/*<img className="list__thumbnail__img" src={`images/pokemon/${index}.png`} alt=""/>*/}
                <img src="https://placehold.it/150/749DAB/ffffff" alt="" width="150" height="150" />
                <figcaption className="list__thumbnail__caption">{pokemon.name}</figcaption>
            </figure>
        </Link>
    );
};

export default Pokemon;