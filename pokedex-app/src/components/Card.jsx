import { Link } from "react-router-dom";
import { capitalize } from "../utils/textExtensions.js";

function Card({pokemon}) {
    const id = pokemon.url.split("/").filter(Boolean).pop();

    return (
        <>
            <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "12px",
                    padding: "1rem",
                    textAlign: "center",
                    width: "180px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                        alt={pokemon.name}
                        width={96}
                        height={96}
                    />
                    <p
                    style={{
                        width: "180px",           // el ancho máximo
                        overflow: "hidden",       // oculta lo que se pasa
                        textOverflow: "ellipsis", // pone los "..."
                        whiteSpace: "nowrap"      // evita salto de línea
                    }}
                    >
                        {pokemon.url}
                    </p>
                    <p>{capitalize(pokemon.name)}</p>
                </div>
            </Link>
        </>
    );
}

export default Card;