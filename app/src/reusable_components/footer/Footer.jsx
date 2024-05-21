import "./Footer.css";
import footerImage from "./FooterImage.png";
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <p>
          Contact us
          <br /> <br />
          mentorship@rigatechgirls.com
        </p>
      </div>
      <div className="footerImage">
        <img src={footerImage} alt="Footer Photo" />
      </div>
    </>
  );
}
