import { useState } from "react";
import PropTypes from "prop-types";
import "./search.css";

const Search = ({ handleSearch, placeholderText }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };
  return (
    <div className="searchContainer">
      <div className="filterButton">
        <button>Filter by &gt;</button>
      </div>

      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
};

export default Search;
