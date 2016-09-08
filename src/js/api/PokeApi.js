import Ajax from "./Ajax";
import mockData from "./mockData";

const PokeApi = {
    baseUrl: "http://pokeapi.co/api/v2/",
    mockData: true,

    getAllPokemon(params) {
        let url;

        if(typeof params === "string") {
            url = params;
        } else {
            url = `${PokeApi.baseUrl}pokemon/${PokeApi.serialise(params)}`;
        }

        return PokeApi.mockData ? Promise.resolve(mockData.pokemonList) : Ajax.get(url);
    },

    getAPokemon(id) {
        let url;

        if(typeof id === "string") {
            url = id;
        } else {
            url = `${PokeApi.baseUrl}pokemon/${id}/`;
        }

        return PokeApi.mockData ? Promise.resolve(mockData.pokemon) : Ajax.get(url);
    },

    getPokemonType(type) {
        let url = `${PokeApi.baseUrl}type/${type}/`;
        return PokeApi.mockData ? Promise.resolve(mockData.pokemonTypes[type]) : Ajax.get(url);
    },

    serialise(options) {
        return Object.keys(options).reduce((previousValue, currentKey, index) => {
            let prefix = (index === 0) ? "" : "&";
            return `${previousValue + prefix + currentKey}=${options[currentKey]}`;
        }, "?");
    }
}

export default PokeApi;
