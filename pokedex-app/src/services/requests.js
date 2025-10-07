import api from "../context/pokemonContext.js";

export const getPokemonList = async (url = 'pokemon?limit=20&offset=0') => {
    const {data} = await api.get(url);
    return data;
}

export const getPokemonDetails = async (name) =>{
    const {data} = await api.get(`pokemon/${name}`)
    return data;
}

export const getPokemonListByParam = async (param) =>{
    let dataList = [];

    try {
        const res = await api.get(`type/${param}`);
        if(res.data?.pokemon){
            dataList = dataList.concat(res.data.pokemon.map(p => p.pokemon));
        }
    } catch (error) {
        console.warn(`No se encontró tipo con el type: ${param}`);
    }

    if (dataList.length === 0) {
        try {
            const {data : dataAbility} = await api.get(`ability/${param}`);
            if(dataAbility?.pokemon){
                dataList = dataList.concat(dataAbility.pokemon.map(p => p.pokemon));
            }
        } catch (error) {
            console.warn(`No se encontró habilidad con el ability: ${param}`);
        }
    }
    
    if (dataList.length === 0) {
        try {
            const res = await api.get(`pokemon-habitat/${param}`);
            if(res.data?.pokemon_species){
                dataList = dataList.concat(
                    res.data.pokemon_species.map(p => ({
                        name: p.name,
                        url: `https://pokeapi.co/api/v2/pokemon/${p.name}`,
                    }))
                );
            }
        } catch (error) {
            console.warn(`No se encontró hábitat con el habitat: ${param}`);
        }
    }
    // Eliminar duplicados
    const uniqueData = Array.from(new Map(dataList.map(p => [p.name, p])).values());

    return uniqueData;
}