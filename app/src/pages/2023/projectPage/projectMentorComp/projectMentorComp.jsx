import "./projectMentorComp.css";
import PropTypes from "prop-types";

const MentorCard = ({ name, role, field, linkedin, onReadMore }) => {
  return (
    <div className="mentorCard">
      <h2 className="mentorRole">
        {role}
        <br></br>
        {name}
      </h2>
      <h3 className="mentorField">{field}</h3>
      <p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mentorLink"
        >
          LinkedIn
        </a>
      </p>
      <button onClick={onReadMore} className="mentorButton">
        Read more
      </button>
    </div>
  );
};

MentorCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
};

export default MentorCard;
