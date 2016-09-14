import React, { Component } from "react";
import actions from "../actions/actions";
import { connect } from "react-redux";
import PokemonCard from "./pokemon/pokemonCard";
import AnimatedThumbnail from "../utilities/AnimatedThumbnail";
import PokeUtilities from "../utilities/PokeUtilities";

class PokemonPage extends Component {
    constructor() {
        super();
        // this.loadPokemonCard = this.loadPokemonCard.bind(this);
        // this.onPokemonCardMount = this.onPokemonCardMount.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(actions.getAPokemonAndTypes(Number(this.props.params.pokemonId)));
    }

    onPokemonCardMount(targetElem) {
        // AnimatedThumbnail.setTarget(targetElem);
    }

    componentWillUpdate(nextProps) {
        if(nextProps.types.psychic && nextProps.types.psychic.damage_relations && nextProps.types.water && nextProps.types.water.damage_relations) {
            PokeUtilities.getDamageRelations([nextProps.types.psychic, nextProps.types.water])
        }
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
        pokemon: state.pokemonDetailed[ownProps.params.pokemonId],
        types: state.pokemonTypes
    };
}

export default connect(mapStateToPokemonPageProps)(PokemonPage);
