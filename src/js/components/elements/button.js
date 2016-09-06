import React, { Component, PropTypes } from "react";

class Button extends Component {
    constructor() {
        super();
    }

    getButtonStyle() {
        return `btn--${this.props.style || "primary"}`;
    }

    render() {
        return (
            <button 
                onClick={this.props.onClick} 
                type={this.props.type || "button"} 
                className={`btn ${this.getButtonStyle()}`}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </button>
        );
    }
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    style: PropTypes.string
};

export default Button;
