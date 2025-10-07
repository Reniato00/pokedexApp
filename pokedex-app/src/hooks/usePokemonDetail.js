import { useState, useEffect } from 'react';
import { getPokemonDetails } from '../services/requests.js';

export const usePokemonDetail = (name) => {
    const [pokemon , setPokemon] = useState(null);
    const [loading , setLoading] = useState(true);

    const fetchPokemonDetail = async (pokemonName) =>{
        setLoading(true);

        try {
            const res = await getPokemonDetails(pokemonName);
            setPokemon(res);
        } catch (err) {
            console.error("Error al cargar detalle del Pokémon", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(name){
            fetchPokemonDetail(name);
        }
    }, [name]);


    return {pokemon , loading};
}