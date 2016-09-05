import React from "react";
import StatsBar from "./statsBar";
import PokeUtilities from "../../utilities/PokeUtilities";

const PokeStats = ({ stats }) => {
    return (
        <ul className="stats__container">
        {
            stats.slice().reverse().map((stat, index) => {
                return (
                    <StatsBar
                        statVal={PokeUtilities.getAdjustedStat(stat.base_stat)}
                        label={PokeUtilities.getStatName(stat.stat.name)}
                        index={index}
                        key={stat.stat.name}
                    />
                );
            })
        }
        </ul>
    );
};

export default PokeStats;
