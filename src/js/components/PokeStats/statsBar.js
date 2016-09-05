import React, { PropTypes } from "react";

const StatsBar = ({ statVal, label, index }) => {
    const getBarStyle = () => ({
        height: `${statVal}%`,
        transitionDelay: index ? `${200 + index * 100}ms` : "200ms"
    });

    return (
        <li className="stats__bar">
            <div className="stats__bar__inner" style={getBarStyle()}></div>
            <div className="stats__label">{label}</div>
        </li>
    );
};

StatsBar.propTypes = {
    statVal: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    index: PropTypes.number
};

export default StatsBar;
