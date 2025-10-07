import "../assets/home.css";

function Searchbar() {
    return (
        <>
            <div className="searchbar">
                <input className="searchbar-input" type="text" placeholder="Search..." />
                <button className="searchbar-btn">Search</button>
            </div>
        </>
    );
}

export default Searchbar;