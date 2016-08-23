import React, { Component } from "react";
import actions from "../actions/actions";
import { connect } from "react-redux";
import PokemonCard from "./pokemon/pokemonCard";
import AnimatedThumbnail from "../utilities/AnimatedThumbnail";

class PokemonPage extends Component {
    constructor() {
        super();
        this.loadPokemonCard = this.loadPokemonCard.bind(this);
        this.onPokemonCardMount = this.onPokemonCardMount.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(actions.getAPokemonAndTypes(Number(this.props.params.pokemonId)));
    }

    onPokemonCardMount(targetElem) {
        AnimatedThumbnail.setTarget(targetElem);
    }

    loadPokemonCard() {
        if(this.props.pokemon) {
            return (
                <PokemonCard
                    pokemon={this.props.pokemon}
                    miniCard={true}
                    onMount={this.onPokemonCardMount}
                />
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    {this.loadPokemonCard()}
                </div>
            </div>
        );
    }
}

const mapStateToPokemonPageProps = (state, ownProps) => {
    return {
        pokemon: state.pokemonDetailed[ownProps.params.pokemonId]
    };
}

export default connect(mapStateToPokemonPageProps)(PokemonPage);
