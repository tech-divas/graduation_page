import "./Carousel.css";
import mieraLacis from "./mieraLacis.png";
import coworking from "./Untitled design (1).jpg";
import women from "./Untitled design (2).jpg";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carouselImages">
        <img src={mieraLacis} alt="Image 1" />
        <img src={coworking} alt="Image 2" />
        <img src={women} alt="Image 3" />
      </div>

      <div className="carouselControl">
        <span className="carouselDot"></span>
        <span className="carouselDot"></span>
        <span className="carouselDot"></span>
      </div>
    </div>
  );
};

export default Carousel;
