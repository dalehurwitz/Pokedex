import React from "react";
import PokeUtilities from "../../utilities/PokeUtilities";

const DAMAGE_KEYS = {
    OFFENCE: ["double_damage_to", "half_damage_to", "no_damage_to"],
    DEFENCE: ["double_damage_from", "half_damage_from", "no_damage_from"]
};

const DamageRelations = ({ types }) => {

    const getDamageRelations = () => {
        if(types) {
            return PokeUtilities.getDamageRelations(types);
        }
    }

    const beautifyKey = (key) => {
        return key.replace(/_/g, " ");
    }

    const renderTypeBadge = (type) => {
        return <li key={type} className={`badge type--${type}`}>{type}</li>
    }

    const renderDamageType = (damageTypeKeys, damageRelations) => {
        return damageTypeKeys.map(key => {
            if(damageRelations[key].length) {
                return (
                    <div key={key} className="damage-level">
                        <h5>{beautifyKey(key)}</h5>
                        <ul>
                            {
                                damageRelations[key].map(type => renderTypeBadge(type))
                            }
                        </ul>
                    </div>
                );
            }
        });
    }

    const renderDamageRelations = () => {
        const damageRelations = getDamageRelations();

        if(damageRelations) {
            return Object.keys(DAMAGE_KEYS).map(key => {
                return (
                    <div key={key} className="col col-2-tablet">
                        <h4>{key}</h4>
                        <div className="damage">
                            {renderDamageType(DAMAGE_KEYS[key], damageRelations)}
                        </div>
                    </div>
                )
            });
        }
    }

    return (
        <div className="panel card">
            <div className="card__inner damage-relations col-container">
                {renderDamageRelations()}
            </div>
        </div>
    );
};

export default DamageRelations;
