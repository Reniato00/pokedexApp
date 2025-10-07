import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import { usePokemonList } from "../hooks/usePokemonList";
import { usePokemonByParams } from "../hooks/usePokemonByParams";
import { useState } from "react";
import "../assets/home.css"

function Home(){

    const [searchValue, setSearchValue] = useState("");
    const { pokemons, nextUrl, prevUrl, loading, fetchPokemons } = usePokemonList();
    const { searchPokemons, searchLoading } = usePokemonByParams(searchValue);

    const displayedPokemons = searchValue ? searchPokemons : pokemons;
    const isLoading = searchValue ? searchLoading : loading;

    if (isLoading) return <p>Cargando...</p>;

    return (
        <>
            <Searchbar onSubmit={(value) => setSearchValue(value)}/>
            <div>
                {displayedPokemons.length === 0 && ( 
                    <p>No se encontraron Pokémons.</p> 
                )}
                <div className="card-grid">
                    {displayedPokemons.map(pokemon =>(
                        <Card key={pokemon.name} pokemon={pokemon} />
                    ))}
                </div>
                {!searchValue && (
                    <div className="pagination" style={{ marginTop: "1rem" }}>
                        <button disabled={!prevUrl} onClick={() => fetchPokemons(prevUrl)}>
                        ⬅️ Previous
                        </button>
                        <button disabled={!nextUrl} onClick={() => fetchPokemons(nextUrl)}>
                        Next ➡️
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
export default Home;