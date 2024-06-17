import PageTemplate from "../../../reusableComponents/pageTemplate";
import ExpertsSpeakersComp from "../expertsSpeakersPage/expertsSpeakersComp/expertsSpeakersComp";
import Search from "../../../reusableComponents/search/search";

const ExpertsSpeakersPage = () => {
  return (
    <PageTemplate>
      <div>
        <h1 className="expertsHeading">Experts and speakers Year 2023</h1>
      </div>
      <Search placeholderText="Search experts/speakers" />
      <ExpertsSpeakersComp />
    </PageTemplate>
  );
};

export default ExpertsSpeakersPage;
