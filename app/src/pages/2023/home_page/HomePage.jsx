import Header from "../../../reusable_components/header/Header";
import Menu from "../../../reusable_components/menu/Menu";
import AllParticipantDescriptions from "./AllParticipantDescriptions";
import Carousel from "./carousel/Carousel";
import PracticeProjectsInfo from "./practice_project_info/PracticeProjectsInfo";
import Statistics from "./Statistics";
import Footer from "../../../reusable_components/footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <PracticeProjectsInfo />
      <Carousel />
      <Statistics />
      <AllParticipantDescriptions />
      <Footer />
    </div>
  );
};

export default HomePage;
