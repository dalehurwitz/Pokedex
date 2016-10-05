import React, { PropTypes } from "react";

const Button = ({ children, onClick, type, style, disabled }) => {
    const getButtonStyle = () => {
        return `btn btn--${style || "primary"}`;
    }

    return (
        <button
            onClick={onClick}
            type={type || "button"}
            className={getButtonStyle()}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    style: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;
