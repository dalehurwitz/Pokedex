import React from "react";
import StatsBar from "./statsBar";

const PokeStats = ({ stats }) => {
    return (
        <ul className="stats__container">
        {
            stats.map(stat => {
                return (
                    <StatsBar stat={stat} key={stat.stat.name} />
                );
            })
        }
        </ul>
    );
};

export default PokeStats;
