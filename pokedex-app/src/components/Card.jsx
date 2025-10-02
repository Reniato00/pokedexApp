function Card({pokemon}) {
    return (
        <>
            <h2>Card Component</h2>
            <p>{pokemon.url}</p>
            <p>{pokemon.name}</p>
        </>
    );
}

export default Card;