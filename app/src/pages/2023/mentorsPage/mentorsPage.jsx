import { useState } from "react";
import PageTemplate from "../../../reusableComponents/pageTemplate";
import MentorsComp from "./mentorsComp/mentorsComp";
import Search from "../../../reusableComponents/search/search";

const MentorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <PageTemplate>
      <div>
        <h1 className="mentorsHeading">Mentors Year 2023</h1>
      </div>
      <Search handleSearch={handleSearch} placeholderText="Search mentors" />
      <MentorsComp searchQuery={searchQuery} />
    </PageTemplate>
  );
};

export default MentorsPage;
