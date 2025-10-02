import { useState, useEffect } from "react";
import {getPokemonList} from "../services/requests.js";

const BASE_URL = "pokemon?limit=20&offset=0";

export const usePokemonList = (initialUrl = BASE_URL) => {
    const [pokemons , setPokemons] = useState([]);
    const [nextUrl , setNextUrl] = useState(null);
    const [prevUrl , setPrevUrl] = useState(null);
    const [loading , setLoading] = useState(true);

    const fetchPokemons = async (url) => {
        setLoading(true);

        try {
            const res = await getPokemonList(url || BASE_URL);
            setPokemons(res.results);
            setNextUrl(res.next);
            setPrevUrl(res.previous);
        } catch (err) {
        console.error("Error al cargar Pokémon", err);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons(initialUrl);
    }, [initialUrl]);

    return {pokemons, nextUrl, prevUrl, loading, fetchPokemons};
}