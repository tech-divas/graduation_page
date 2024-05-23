import Header from "../../../reusable_components/header/Header";
import Menu from "../../../reusable_components/menu/Menu";
import Carousel from "./carousel/Carousel";
import PracticeProjectsInfo from "./practice_project_info/PracticeProjectsInfo";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <PracticeProjectsInfo />
      <Carousel />
    </div>
  );
};

export default HomePage;
