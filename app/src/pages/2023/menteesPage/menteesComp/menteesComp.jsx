import PropTypes from "prop-types";
import "./menteesComp.css";

const MenteesComp = ({ mentees }) => {
  return (
    <>
      <div className="menteesContainer">
        {mentees.map((mentee, id) => (
          <div className="menteeCard" key={id}>
            <h2>{mentee.name}</h2>
            <a
              href={mentee.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="menteeLinkedInLink"
            >
              LinkedIn Profile
            </a>
            <p>{mentee.field}</p>
            <div className="menteeButtonContainer">
              <button className="menteeButton">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
MenteesComp.propTypes = {
  mentees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenteesComp;
