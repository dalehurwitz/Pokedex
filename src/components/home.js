import React, { Component } from "react";
import actions from "../actions/actions";
import { connect } from "react-redux";
import PokemonFeatured from "./pokemon/pokemonFeatured";
import PokemonList from "./pokemon/pokemonList";

class Home extends Component {
    componentWillMount() {
        this.props.dispatch(actions.initApp());
    }

    render() {
        return (
            <div>
                <h1>Pokedex</h1>
                <PokemonFeatured />
                <PokemonList />
            </div>
        );
    }
}

export default connect()(Home);
