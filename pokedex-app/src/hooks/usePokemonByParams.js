import { getPokemonListByParam } from "../services/requests";
import { useEffect, useState } from "react";

export const usePokemonByParams = (param) => {
    const [searchPokemons , setPokemons] = useState([]);
    const [searchLoading , setLoading] = useState(true);

    const fetchPokemonsByParam = async (param) =>{
        setLoading(true);

        try {
            const res = await getPokemonListByParam(param);
            setPokemons(res);
        } catch (err) {
            console.error("Error al cargar Pokémons por parámetro", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(param){
            fetchPokemonsByParam(param);
        }
    }, [param]);

    return {searchPokemons , searchLoading};
}