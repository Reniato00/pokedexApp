import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="navbar">
                <nav>
                    <Link to="/">Pokedex</Link>
                </nav>
            </div>
            <hr />
        </>
    );
}
export default Navbar;