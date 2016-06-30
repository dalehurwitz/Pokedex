import Ajax from "./Ajax";

class PokeApi {
    static get baseUrl() {
        return "http://pokeapi.co/api/v2/"
    }
    
    static getAllPokemon(url) {
        return Ajax.get(url);
    }
    
    static serialise(options) {
        return Object.keys(options).reduce((previousValue, currentKey, index) => {
            let prefix = (index === 0) ? "" : "&";
            return `${previousValue + prefix + currentKey}=${options[currentKey]}`;
        }, "?");
    }
}

export default PokeApi;