import Header from "./header/header";
import Menu from "./menu/menu";
import Footer from "./footer/footer";
import PropTypes from "prop-types";

const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
