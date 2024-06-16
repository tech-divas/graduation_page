import PageTemplate from "../../../reusableComponents/pageTemplate";
import "./menteesPage.css";
import MenteesComp from "./menteesComp/menteesComp";
import Search from "../../../reusableComponents/search/search";

const MenteesPage = () => {
  return (
    <PageTemplate>
      <Search placeholderText="Search Mentees" />
      <MenteesComp />
    </PageTemplate>
  );
};

export default MenteesPage;
