const HEIGHT_INCH_UNIT = 3.923; //Arbitrary height unit to inch conversion used by PokeApi
const WEIGHT_POUND_UNIT = 4.53; //Arbitrary pound to weight unit conversion used by PokeApi
const INCH_TO_CM = 2.54;
const KILO_TO_POUND = 2.20462;
const STAT_MAX = 255;

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
    }
}

export default PokeUtilities;
