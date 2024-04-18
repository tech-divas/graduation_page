import { useState } from "react";
import "./Search.css";

const Search = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className="searchContainer">
      <div className="filterButton">
        <button>Filter by &gt;</button>
      </div>

      <div className="searchInput">
        <input
          type="text"
          placeholder="Search Project"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
