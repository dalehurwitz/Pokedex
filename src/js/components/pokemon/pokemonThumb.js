import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions/actions";
import Link from "react-router/lib/Link";
import AnimatedThumbnail from "../../utilities/AnimatedThumbnail";

class Pokemon extends Component {
    constructor() {
        super();
    }

    initAnimatedThumbnail(e) {
        if(!this._thumbnailImg) return;
        // AnimatedThumbnail.setSource(this._thumbnailImg);
    }

    render() {
        return (
            <Link
                to={`pokemon/${this.props.index}`}
                onClick={this.initAnimatedThumbnail}
            >
                <figure className="list__thumbnail__img thumbnail__img"
                    ref={(elem) => {
                        if(!elem) return;
                        this._thumbnailImg = elem.getElementsByTagName("img")[0];
                    }}
                >
                    <img className="list__thumbnail__img" src={`images/pokemon/${this.props.index}.png`} alt="" />
                    {/*<img className="list__thumbnail__img" src={`images/pokemon/${index}.png`} alt=""/>*/}
                    <figcaption className="list__thumbnail__caption">{this.props.pokemon.name}</figcaption>
                </figure>
            </Link>
        );
    }
};

export default Pokemon;
