import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PokeUtilities from "../../utilities/PokeUtilities";
import PokeStats from "../PokeStats/pokeStats";
import Badge from "../elements/badge";
import { Link } from "react-router";

class PokemonCard extends Component {

    componentDidMount() {
        if(this.props.onMount) {
            // this.props.onMount(this._cardThumbnail);
        }
    }

    renderCardDetails() {
        const height = PokeUtilities.getHeight(this.props.pokemon.data.height);
        const weight = PokeUtilities.getWeight(this.props.pokemon.data.weight);
        let link = null;

        if(this.props.pokemon.loading) {
            return null;
        }

        if(this.props.link) {
            link = (
                <Link to={`/pokemon/${this.props.pokemon.data.id}`}>
                    {this.props.linkLabel}
                </Link>
            );
        }

        return (
            <section className="card__details">
                <h2 className="card__title">{this.props.pokemon.data.name}</h2>
                <div className="card__types">
                    {this.props.pokemon.data.types.map((type, index) => {
                        let typeName = type.type.name;
                        return (
                            <Badge key={typeName} classes={`type--${typeName}`} text={typeName} />
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
                {link}
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
                    className="card__thumbnail"
                    ref={(elem) => {
                        if(elem) {
                            this._cardThumbnail = elem;
                        }
                    }}
                >
                    {pokemonImg}
                </figure>
                {this.renderCardDetails()}
            </div>
        );
    }

    cardTitle() {
        if(this.props.title) {
            return (
                <div className="card__badge card__inner panel">{this.props.title}</div>
            );
        }
    }

    cardInnerHandler() {
        let className = "card__inner panel" + (this.props.title ? " card__inner--has-badge" : "");
        return (
            <div className={className}>
                {this.pokemonCardHandler()}
            </div>
        );
    }

    render() {
        return (
            <div className="card">
                {this.cardTitle()}
                {this.cardInnerHandler()}
            </div>
        );
    }
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
    title: PropTypes.string,
    miniCard: PropTypes.bool,
    onMount: PropTypes.func,
    link: PropTypes.bool,
    linkLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default PokemonCard;
