import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="contactInfo">
          <h4>Contact us</h4>
          <a href="mailto:mentorship@rigatechgirls.com">
            mentorship@rigatechgirls.com
          </a>
        </div>
        <div>
          <p className="footerText">
            Riga TechGirls is committed to ensuring the security and protection
            of the personal information that we process, and to provide a
            compliant and consistent approach to data protection. The data will
            be used only for the Riga TechGirls mentorship program.
          </p>
        </div>
      </div>
      <div>
        <ul className="rtgLinks">
          <li>
            <a href="https://rigatechgirls.com/" target="_blank">
              RTG Home
            </a>
          </li>
          <li>
            <a href="https://rigatechgirls.com/why/" target="_blank">
              Why RTG
            </a>
          </li>
          <li>
            <a href="https://rigatechgirls.com/about-us/" target="_blank">
              About us
            </a>
          </li>
          <li>
            <a href="https://rigatechgirls.com/programs/" target="_blank">
              Programs
            </a>
          </li>
          <li>
            <a href="https://rigatechgirls.medium.com/" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="https://rigatechgirls.com/support-us/" target="_blank">
              Support us
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfw5hVGNzBR1A-Ad65QnbhhWAE5KERiSFxZYMinLnDXEa3AOw/viewform"
              target="_blank"
            >
              Join us
            </a>
          </li>
          <li>
            <a
              href="https://shop.rigatechgirls.com/?_gl=1*1aec01s*_ga*ODA4OTI4MzY5LjE2OTI3MDUxNTQ.*_ga_F1F578001F*MTcxNzc3NTIyMS42NC4xLjE3MTc3NzU2OTAuMC4wLjA."
              target="_blank"
            >
              Shop
            </a>
          </li>
        </ul>
      </div>
      <div className="footerImage"></div>
    </>
  );
}
