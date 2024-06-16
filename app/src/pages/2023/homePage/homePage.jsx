import AllParticipantDescriptions from "./allParticipantDescription/allParticipantDescriptions";
import Carousel from "./carousel/carousel";
import PracticeProjectsInfo from "./practiceProjectInfo/practiceProjectsInfo";
import Statistics from "./statistics/statistics";
import PageTemplate from "../../../reusableComponents/pageTemplate";
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
