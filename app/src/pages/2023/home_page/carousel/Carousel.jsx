import "./Carousel.css";
import bookworms from "./bookworms.png";
import neitrals from "./neitrals.png";
import sortIt from "./sortIt.png";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carouselImages">
        <img src={bookworms} alt="Bookworms" />
        <img src={neitrals} alt="neitrals.lv" />
        <img src={sortIt} alt="Sort It" />
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
