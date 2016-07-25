import Ajax from "./Ajax";

const PokeApi = {
    baseUrl: "http://pokeapi.co/api/v2/",
    
    getAllPokemon(params) {
        let url;
        
        if(typeof params === "string") {
            url = params;
        } else {
            url = `${PokeApi.baseUrl}pokemon/${PokeApi.serialise(params)}`;
        }
        return Ajax.get(url);
    },
    
    getAPokemom(id) {
        let url;
        
        if(typeof id === "string") {
            url = string;
        } else {
            url = `${PokeApi.baseUrl}pokemon/${id}/`;
        }
        
        return Ajax.get(url);
    },
    
    serialise(options) {
        return Object.keys(options).reduce((previousValue, currentKey, index) => {
            let prefix = (index === 0) ? "" : "&";
            return `${previousValue + prefix + currentKey}=${options[currentKey]}`;
        }, "?");
    }
}

export default PokeApi;