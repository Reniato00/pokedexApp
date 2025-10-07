import { useState } from "react";
import "../assets/home.css";

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue); // enviamos el valor al padre solo al submit
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          className="searchbar-input"
          type="text"
          value={inputValue}
          placeholder="Search by type, ability, habitat"
          onChange={(e) => setInputValue(e.target.value)} // actualizado aquí
        />
        <button className="searchbar-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
