import Header from "../../../reusable_components/header/Header";
import Menu from "../../../reusable_components/menu/Menu";
import Footer from "../../../reusable_components/footer/Footer";
import "./MentorsPage.css"
import MentorsComp from "./MentorsComp";

const MentorsPage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <MentorsComp />
      <Footer />
    </div>
  );
};

export default MentorsPage;
