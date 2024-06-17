import "./loadMoreButton.css";
import PropTypes from "prop-types";

const LoadMoreButton = ({ handleLoadMore, loading, hasMoreItems }) => {
  if (!hasMoreItems) return null;

  return (
    <div className="loadMoreContainer">
      <button
        className="loadMoreButton"
        onClick={handleLoadMore}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  hasMoreItems: PropTypes.bool.isRequired,
};

export default LoadMoreButton;
