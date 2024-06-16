import PropTypes from "prop-types";
import "./menteesProjectComp.css";

const MenteeCard = ({ name, role, field, linkedin, onReadMore }) => {
  return (
    <div className="menteeCard">
      <h2 className="menteeRole">
        {role}
        <br></br>
        {name}
      </h2>
      <h3 className="menteeField">{field}</h3>
      <p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="menteeLink"
        >
          LinkedIn
        </a>
      </p>
      <button onClick={onReadMore} className="menteeButton">
        Read more
      </button>
    </div>
  );
};

MenteeCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
};

export default MenteeCard;
