import Ajax from "./Ajax";

class PokeApi {
    static get baseUrl() {
        return "http://pokeapi.co/api/v2/"
    }
    
    static getAllPokemon(params) {
        let url;
        
        if(typeof params === "string") {
            url = params;
        } else {
            url = `${PokeApi.baseUrl}pokemon/${PokeApi.serialise(params)}`;
        }
        return Ajax.get(url);
    }
    
    static getAPokemom(id) {
        let url;
        
        if(typeof id === "string") {
            url = string;
        } else {
            url = `${PokeApi.baseUrl}pokemon/${id}/`;
        }
        
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