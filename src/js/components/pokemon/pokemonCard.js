import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PokeUtilities from "../../utilities/PokeUtilities";
import PokeStats from "../PokeStats/pokeStats";

class PokemonCard extends Component {
    constructor() {
        super();
        this.pokemonCardHandler = this.pokemonCardHandler.bind(this);
        this.cardTitle = this.cardTitle.bind(this);
        this.cardInnerHandler = this.cardInnerHandler.bind(this);
        this.getCardClasses = this.getCardClasses.bind(this);
        this.showCardDetails  =this.showCardDetails.bind(this);
    }

    componentDidMount() {
        if(this.props.onMount) {
            this.props.onMount(this._cardThumbnail);
        }
    }

    showCardDetails() {
        let height = PokeUtilities.getHeight(this.props.pokemon.data.height),
            weight = PokeUtilities.getWeight(this.props.pokemon.data.weight);

        if(this.props.pokemon.loading) {
            return false;
        }

        return (
            <section className="card__details">
                <h2 className="card__title">{this.props.pokemon.data.name}</h2>
                <div className="card__types">
                    {this.props.pokemon.data.types.map((type, index) => {
                        return (
                            <span key={index}>{type.type.name}</span>
                        );
                    })}
                </div>
                <div>
                    <span>Height: </span>
                    <span>{`${height.metric} / ${height.imperial}`}</span>{/* 3.9 x height value from api = height in inches */}
                </div>
                <div>
                    <span>Weight: </span>
                    <span>{`${weight.metric} / ${weight.imperial}`}</span>
                </div>
                <PokeStats stats={this.props.pokemon.data.stats} />
            </section>
        )
    }

    pokemonCardHandler() {
        let pokemonImg = null;

        if(!this.props.pokemon.loading) {
            pokemonImg = (
                <img className="card__thumbnail__img" src={`/images/pokemon/${this.props.pokemon.data.id}.png`} width="150" height="150" alt=""/>
            );
        }

        return (
            <div className="card__content">
                <figure
                    className="card__thumbnail thumbnail__img"
                    ref={(elem) => {
                        if(elem) {
                            this._cardThumbnail = elem;
                        }
                    }}
                >
                    {pokemonImg}
                </figure>
                {this.showCardDetails()}
            </div>
        );
    }

    cardTitle() {
        if(this.props.title) {
            return (
                <div className="card__badge card__inner">{this.props.title}</div>
            );
        }
    }

    cardInnerHandler() {
        let className = "card__inner" + (this.props.title ? " card__inner--has-badge":"");
        return (
            <div className={className}>
                {this.pokemonCardHandler()}
            </div>
        );
    }

    getCardClasses() {
        let className = ["card"];
        if(this.props.miniCard) {
            className.push("card--mini");
        }
        return className.join(" ");
    }

    render() {
        return (
            <div
                className={this.getCardClasses()}
            >
                {this.cardTitle()}
                {this.cardInnerHandler()}
            </div>
        );
    }
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
    title: PropTypes.string,
    miniCard: PropTypes.bool
};

export default PokemonCard;
