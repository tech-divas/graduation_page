import "./Popup.css";

const Popup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="popup">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <div className="popupContent">
          <h2>Name Surname</h2>
          <p>Info about the person</p>
        </div>
      </div>
    )
  );
};

export default Popup;
