import "./allParticipantDescriptions.css";
import whiteBird from "../homePageImages/whiteBird.png";
import greenBird from "../homePageImages/greenBird.png";
import yellowBird from "../homePageImages/yellowBird.png";

export default function AllParticipantDescriptions() {
  return (
    <div className="allParticipants">
      <div className="participant mentors">
        <img src={whiteBird} alt="white bird" className="birdImg" />
        <div className="textContent">
          <p>
            Our program&apos;s mentors are dedicated professionals who empower
            women in technology through personalized guidance and support,
            offering 1:1 sessions and fostering open communication. They commit
            several hours weekly to mentoring and can also lead practice project
            teams, enhancing both personal and professional growth. By
            participating, mentors refine their leadership skills, expand their
            network, and make a meaningful impact in the tech industry.{" "}
            <button>Mentors</button>
          </p>
        </div>
      </div>

      <div className="participant experts-speakers">
        <img src={greenBird} alt="green bird" className="birdImg" />
        <div className="textContent">
          <p>
            Experts and speakers in our Mentorship program are esteemed
            professionals dedicated to supporting project teams and enhancing
            learning experiences. They guide teams by sharing valuable insights
            and solutions during meetings, ensuring their guidance aligns with
            the team&apos;s objectives. By actively engaging with project teams,
            they enrich participants&apos; learning journeys and foster a
            collaborative environment of continuous growth and development.{" "}
            <button>Experts/Speakers</button>
          </p>
        </div>
      </div>

      <div className="participant mentees">
        <img src={yellowBird} alt="yellow bird" className="birdImg" />
        <div className="menteesTextContent">
          <p>
            Mentees in our program embark on a transformative six-month journey,
            working on practical projects and receiving personalized guidance
            from mentors. This supportive environment blends online and
            in-person interactions, offering access to local and international
            mentors, networking opportunities, and skill advancement.
            Participants engage in hands-on projects, receiving guidance from
            team mentors and experts, fostering a sense of community and
            empowerment for personal and professional growth.{" "}
            <button className="menteesTextContentButton">Mentees</button>
          </p>
        </div>
      </div>
    </div>
  );
}
