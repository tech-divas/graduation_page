import AllParticipantDescriptions from "./AllParticipantDescriptions";
import Carousel from "./carousel/Carousel";
import PracticeProjectsInfo from "./practice_project_info/PracticeProjectsInfo";
import Statistics from "./Statistics";
import PageTemplate from "../../../reusable_components/PageTemplate";
const HomePage = () => {
  return (
    <PageTemplate>
      <PracticeProjectsInfo />
      <Carousel />
      <Statistics />
      <AllParticipantDescriptions />
    </PageTemplate>
  );
};

export default HomePage;
