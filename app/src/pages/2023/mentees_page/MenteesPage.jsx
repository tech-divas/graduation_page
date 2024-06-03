import Header from "../../../reusable_components/header/Header";
import Menu from "../../../reusable_components/menu/Menu";
import Footer from "../../../reusable_components/footer/Footer";
import "./MenteesPage.css";
import MenteesComp from "./MenteesComp";

const MenteesPage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <MenteesComp />
      <Footer />
    </div>
  );
};

export default MenteesPage;
