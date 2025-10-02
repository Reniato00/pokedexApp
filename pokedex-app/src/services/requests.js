import api from "../context/pokemonContext.js";

export const getPokemonList = async (url = 'pokemon?limit=20&offset=0') => {
    const {data} = await api.get(url);
    return data;
}

export const getPokemonDetails = async (name) =>{
    const {data} = await api.get(`pokemon/${name}`)
    return data;
}