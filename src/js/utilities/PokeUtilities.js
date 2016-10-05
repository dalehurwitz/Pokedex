const HEIGHT_INCH_UNIT = 3.923; //Arbitrary height unit to inch conversion used by PokeApi
const WEIGHT_POUND_UNIT = 4.53; //Arbitrary pound to weight unit conversion used by PokeApi
const INCH_TO_CM = 2.54;
const KILO_TO_POUND = 2.20462;
const STAT_MAX = 255;
const DAMAGE_RELATIONS_KEY = "damage_relations";

const PokeUtilities = {
    getHeight(height) {
        let totalInches = HEIGHT_INCH_UNIT * height,
            feet = Math.floor(totalInches / 12),
            remainder = Math.round(totalInches % 12),
            centimetres = (totalInches * INCH_TO_CM).toFixed(1),
            inches;

        if(remainder == 12) {
            feet++;
            remainder = 0;
        }

        inches = remainder ? `${remainder}\"` : "";

        return {
            metric: `${centimetres}cm`,
            imperial: `${feet}' ${inches}`
        };
    },

    getWeight(weight) {
        let pounds = (weight / WEIGHT_POUND_UNIT).toFixed(1),
            kilos = (pounds / KILO_TO_POUND).toFixed(2);

        return {
            metric: `${kilos}kg`,
            imperial: `${pounds}lb`
        };
    },

    getAdjustedStat(stat, adjustedTo = 100) {
        return Math.floor(stat / STAT_MAX * adjustedTo);
    },

    getStatName(stat) {
        return stat.toLowerCase() === "hp" ? "HP": stat.replace(/-/g, " ");
    },

    // Takes an array of Pokemon Types and returns a single damage relations object
    //
    // Each Pokemon type has a property 'damage_relations' which is an object
    // with proprties such as 'double_damage_from'. Each of these damage
    // properties stores an array of other types. We need to combine the
    // 'damage_relations' properties of each of the supplied types, ensuring
    // there are no duplicates within, i.e.
    // 'double_damage_from: ["ghost", "grass", "poison"]'
    getDamageRelations(types) {
        let allDamageRelations = {};
        types.forEach((type) => {
            allDamageRelations = Object.keys(type[DAMAGE_RELATIONS_KEY]).reduce((previousVal, curKey)=> {
                // We need to merge the given key-value of 'allDamageRelations' with that
                // of the current type in the iteration. If this is the first iteration,
                // 'allDamageRelations' will return undefined for this key, so we must supply an empty array instead
                let curProp = previousVal.hasOwnProperty(curKey) ? [...previousVal[curKey]] : [];
                previousVal[curKey] = [
                    // Include existing array values
                    ...curProp,
                    // Include new array values
                    ...type[DAMAGE_RELATIONS_KEY][curKey]
                        // We only want the type name, not the whole type object
                        .map(obj => obj.name)
                        // If a type already existed in this property array, don't add it again
                        .filter(name => curProp.indexOf(name) === -1)
                ];
                return previousVal;
            }, allDamageRelations);
        });
        return allDamageRelations;
    }
}

export default PokeUtilities;
