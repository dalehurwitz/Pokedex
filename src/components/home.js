import React, { Component } from "react";
import actions from "../actions/actions";
import { connect } from "react-redux";
import PokemonList from "./pokemon/pokemonList";

class Home extends Component {
    componentWillMount() {
        // this.props.dispatch(actions.initApp());
        // this.props.dispatch(actions.getAPokemom(212));
        // this.props.dispatch(actions.getAPokemom(412));
        // this.props.dispatch(actions.getPokemonType("bug"));
        this.props.dispatch(actions.getAPokemonAndTypes(212));
    }

    render() {
        return (
            <div>
                <h1>Pokedex</h1>
                <PokemonList />
            </div>
        );
    }
}

export default connect()(Home);
