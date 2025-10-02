import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import { usePokemonList } from "../hooks/usePokemonList";



function Home(){
    const { pokemons, nextUrl, prevUrl, loading, fetchPokemons } = usePokemonList();

    if (loading) return <p>Cargando...</p>;

    return (
        <>
            <Searchbar/>
            <div>
                <div>
                    {pokemons.map(pokemon =>(
                        <Card key={pokemon.name} pokemon={pokemon} />
                    ))}
                </div>
                <div style={{ marginTop: "1rem" }}>
                    <button disabled={!prevUrl} onClick={() => fetchPokemons(prevUrl)}>
                    ⬅️ Previous
                    </button>
                    <button disabled={!nextUrl} onClick={() => fetchPokemons(nextUrl)}>
                    Next ➡️
                    </button>
                </div>
            </div>
        </>
    )
}
export default Home;