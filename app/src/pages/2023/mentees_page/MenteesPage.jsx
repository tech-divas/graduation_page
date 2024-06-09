import PageTemplate from "../../../reusable_components/PageTemplate";
import "./MenteesPage.css";
import MenteesComp from "./MenteesComp";
import Search from "../../../reusable_components/search/Search";

const MenteesPage = () => {
  return (
    <PageTemplate>
      <Search placeholderText="Search Mentees" />
      <MenteesComp />
    </PageTemplate>
  );
};

export default MenteesPage;
