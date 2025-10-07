import { useParams } from "react-router-dom";
import { usePokemonDetail } from "../hooks/usePokemonDetail.js";
import { capitalize } from "../utils/textExtensions.js";

function Detail(){

    const {name} = useParams();
    const {pokemon , loading} = usePokemonDetail(name);

    if(loading){
        return <p>Cargando...</p>
    }

    return (
        <>
        <h1>{capitalize(pokemon.name)}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
        <p>Tipo: {pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
        <p>Habilidades: {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ")}</p>
        </>
    );
}

export default Detail;