import "./Search.css";

const Search = () => {
  return (
    <div className="searchContainer">
      <div className="filterButton">
        <button>Filter by &gt;</button>
      </div>

      <div className="searchInput">
        <input type="text" placeholder="Search Project" />
      </div>
    </div>
  );
};

export default Search;
