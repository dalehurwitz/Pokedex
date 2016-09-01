import React from "react";

const StatsBar = ({ stat }) => {
    return (
        <li className="stats__bar">
            {stat.base_stat}
        </li>
    );
};

export default StatsBar;
