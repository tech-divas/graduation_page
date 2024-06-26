import "./popup.css";
import PropTypes from "prop-types";
import Bird from "./bird.png";
import GeometricLine from "./geometricLine.png";

const Popup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={`popup ${isOpen ? "active" : ""}`}>
        <div className="popupContent">
          <div className="leftColumn">
            <img
              src={GeometricLine}
              alt="geometric line"
              style={{ height: "400px" }}
            />
          </div>
          <div className="middleColumn">
            <h2>Name Surname</h2>
            <p>Info about the person</p>
          </div>
          <div className="rightColumn">
            <button className="closeButton" onClick={onClose}>
              X
            </button>
            <img src={Bird} alt="bird" style={{ width: "150px" }} />
          </div>
        </div>
      </div>
    )
  );
};
Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
